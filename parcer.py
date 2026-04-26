#!/usr/bin/env python3
import requests
import json
import re
from datetime import datetime
from pathlib import Path
from bs4 import BeautifulSoup

URL = 'https://distrowatch.com/table.php?distribution=enos'
OUTPUT = 'data/dw-stats.json'

headers = {'User-Agent': 'EN-OS-Site/1.0 (contact@en-os.ru)'}

try:
    resp = requests.get(URL, headers=headers, timeout=15)
    resp.encoding = 'utf-8'
    soup = BeautifulSoup(resp.text, 'html.parser')

    data = {
        'popularity_rank': None,
        'hits_per_day': None,
        'rating': None,
        'reviews_count': None,
        'updated': datetime.now().isoformat()
    }

    for li in soup.find_all('li'):
        b_tag = li.find('b')
        if b_tag and 'Popularity:' in b_tag.get_text():
            link = li.find('a')
            if link:
                text = link.get_text(strip=True)
                match = re.search(r'(\d+)\s*\((\d+)\s*hits', text)
                if match:
                    data['popularity_rank'] = int(match.group(1))
                    data['hits_per_day'] = int(match.group(2))

    text = str(soup)
    rating_match = re.search(r'Average visitor rating[^<]*</a></b>:\s*<b>([\d.]+)</b>/10\s*from\s*<b>(\d+)</b>', text)
    if rating_match:
        data['rating'] = float(rating_match.group(1))
        data['reviews_count'] = int(rating_match.group(2))

    Path(OUTPUT).parent.mkdir(parents=True, exist_ok=True)
    with open(OUTPUT, 'w', encoding='utf-8') as f:
        json.dump(data, f, indent=2, ensure_ascii=False)

    print(f'Обновлено {json.dumps(data, ensure_ascii=False)}')

except Exception as e:
    print(f'Ошибка: {e}')
