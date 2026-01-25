from PIL import Image
import sys
import os

def remove_white_background(image_path, threshold=240):
    try:
        img = Image.open(image_path).convert("RGBA")
        datas = img.getdata()

        newData = []
        for item in datas:
            # Check if pixel is close to white (R, G, B > threshold)
            if item[0] > threshold and item[1] > threshold and item[2] > threshold:
                newData.append((255, 255, 255, 0))  # Transparent
            else:
                newData.append(item)

        img.putdata(newData)
        
        # Save as PNG to preserve transparency
        output_path = image_path
        img.save(output_path, "PNG")
        print(f"Successfully processed: {image_path}")
    except Exception as e:
        print(f"Error processing {image_path}: {e}")

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: python remove_bg.py <image_path1> <image_path2> ...")
        sys.exit(1)
    
    for path in sys.argv[1:]:
        remove_white_background(path)
