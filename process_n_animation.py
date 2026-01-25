import os
from moviepy import VideoFileClip
import moviepy.video.fx as fx

def process_video():
    input_path = "videos/loading-screen.mp4"
    output_webm = "videos/netflix_n_loader.webm"
    output_mp4 = "videos/netflix_n_loader.mp4"

    if not os.path.exists(input_path):
        print(f"Error: {input_path} not found. Checking current dir...")
        input_path = "loading-screen.mp4" 
        if not os.path.exists(input_path):
             print("Error: Source video not found.")
             return

    print("Loading video...")
    clip = VideoFileClip(input_path)
    print(f"Original Duration: {clip.duration}s")
    print(f"Original Size: {clip.size}")

    # 1. NO Looping (Use original duration)
    # User requested strictly original duration.
    
    # 2. Crop to Square & Resize (Strict 1024x1024)
    w, h = clip.size
    min_dim = min(w, h)
    
    # Center crop calculation
    x1 = (w - min_dim) / 2
    y1 = (h - min_dim) / 2
    
    # Crop to 1:1
    clip = clip.cropped(x1=x1, y1=y1, width=min_dim, height=min_dim)
    
    # Resize to 1024x1024
    clip = clip.resized(new_size=(1024, 1024))
    print("Resized to 1024x1024")

    # 4. Background Removal (Transparency)
    try:
        # MoviePy 2.x API
        clip_transparent = clip.with_effects([fx.MaskColor(color=[0, 0, 0], threshold=30, stiffness=5)])
    except Exception as e:
        print(f"Error applying MaskColor: {e}")
        clip_transparent = clip

    # 5. Output
    print("Writing WebM (Transparent)...")
    try:
        clip_transparent.write_videofile(output_webm, codec="libvpx-vp9", logger="bar", bitrate="5000k", audio=False)
    except Exception as e:
        print(f"Error writing WebM: {e}")

    print("Writing MP4 (Black Background)...")
    try:
        clip.write_videofile(output_mp4, codec="libx264", logger="bar", audio=False)
    except Exception as e:
        print(f"Error writing MP4: {e}")

    print("Done!")

if __name__ == "__main__":
    process_video()
