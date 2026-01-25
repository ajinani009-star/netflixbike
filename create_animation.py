import os
import glob
from PIL import Image

def create_gif(image_folder, output_path, duration=500):
    # Pattern to find the files we saw (double extension or just jpeg)
    # Trying specific pattern based on list_dir output
    search_pattern = os.path.join(image_folder, "*.jpeg*")
    image_paths = sorted(glob.glob(search_pattern))
    
    if not image_paths:
        print(f"No images found in {image_folder}")
        return

    images = []
    first_image = None
    
    print(f"Found {len(image_paths)} images.")

    for path in image_paths:
        try:
            img = Image.open(path)
            # Ensure RGB mode (handles potential PNG/RGBA issues if any, though these are jpegs)
            if img.mode != 'RGB':
                img = img.convert('RGB')
            
            if first_image is None:
                first_image = img
                size = img.size
                print(f"Base size set to: {size}")
                images.append(img)
            else:
                # Resize to match first image
                if img.size != size:
                    img = img.resize(size, Image.Resampling.LANCZOS)
                images.append(img)
                
        except Exception as e:
            print(f"Failed to load {path}: {e}")

    if len(images) > 1:
        # Save as GIF
        # duration is in milliseconds per frame
        # loop=0 means infinite loop
        images[0].save(
            output_path,
            save_all=True,
            append_images=images[1:],
            optimize=False,
            duration=duration,
            loop=0
        )
        print(f"Animation saved to {output_path}")
    else:
        print("Not enough images to create an animation.")

if __name__ == "__main__":
    # Using absolute path from context
    base_dir = r"c:/Users/ADHEL EALIAS/Downloads/Rebuilted"
    img_dir = os.path.join(base_dir, "images")
    out_file = os.path.join(base_dir, "animation.gif")
    
    create_gif(img_dir, out_file)
