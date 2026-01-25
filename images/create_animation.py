import os
import glob
from PIL import Image
import sys

def create_gif(image_folder, output_path, duration=500):
    print(f"Scanning {image_folder} for images...")
    # Pattern to find the files 
    search_pattern = os.path.join(image_folder, "*.jpeg*")
    image_paths = sorted(glob.glob(search_pattern))
    
    # Filter out non-image files if any (like the script itself if it was named jpeg, which it isn't)
    image_paths = [p for p in image_paths if p.lower().endswith(('.jpg', '.jpeg'))]

    if not image_paths:
        print(f"No images found in {image_folder}")
        return

    images = []
    first_image = None
    
    print(f"Found {len(image_paths)} images.")

    for path in image_paths:
        try:
            img = Image.open(path)
            if img.mode != 'RGB':
                img = img.convert('RGB')
            
            if first_image is None:
                first_image = img
                size = img.size
                print(f"Base size set to: {size}")
                images.append(img)
            else:
                if img.size != size:
                    img = img.resize(size, Image.Resampling.LANCZOS)
                images.append(img)
        except Exception as e:
            print(f"Failed to load {path}: {e}")

    if len(images) > 1:
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
    # Script is in the images folder
    current_dir = os.path.dirname(os.path.abspath(__file__))
    out_file = os.path.join(current_dir, "animation.gif")
    
    create_gif(current_dir, out_file)
