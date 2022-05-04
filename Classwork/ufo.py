import xml.dom.minidom
import os 
  
  
root = xml.dom.minidom.Document()
  
xml = root.createElement('root') 
root.appendChild(xml)
  
country = root.createElement('vulnerableCountry')
country.setAttribute('name', 'USA')
country1 = root.createElement('vulnerableCountry')
country1.setAttribute('name', 'Russia')
country2 = root.createElement('vulnerableCountry')
country2.setAttribute('name', 'Panama')

xml.appendChild(country)
xml.appendChild(country1)
xml.appendChild(country2)
  
xml_str = root.toprettyxml(indent ="\t") 
  

  
with open("/vul.xml", "w") as f:
    f.write(xml_str) 