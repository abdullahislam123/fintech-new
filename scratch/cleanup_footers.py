import os
import re

directory = r'd:\D-folders\All_about_web\fintech new\src\pages'
files = [f for f in os.listdir(directory) if f.endswith('.jsx')]

for filename in files:
    path = os.path.join(directory, filename)
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Remove import
    content = re.sub(r"import Footer from ['\"].*Footer['\"];?\n?", "", content)
    # Remove component call
    content = re.sub(r"\s*<Footer\s*/>\s*", "\n", content)
    
    with open(path, 'w', encoding='utf-8') as f:
        f.write(content)

print("Footer removed from all pages.")
