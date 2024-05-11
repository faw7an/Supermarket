from bs4 import BeautifulSoup
import requests

response = requests.get("https://www.jumia.co.ke/catalog/?q=tvs")
jumia_tvs_webpage_text = response.text

soup = BeautifulSoup(jumia_tvs_webpage_text, "html.parser")
jumia_titles = soup.findAll(name="h3", class_="name")
jumia_images = soup.findAll(name="img", class_="img")
jumia_price = soup.findAll(name="div", class_="prc")

jumia_tv_titles = []
for title in jumia_titles:
    jumia_tv_titles.append(title.get_text())

with open("scrap.txt", "r+") as file:
    for title in jumia_tv_titles:
        file.write(f"{title} \n")