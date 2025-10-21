## Quick Start Guide

Follow these steps to run the app locally using **PyCharm** (recommended).

### Prerequisites
- Python 3.11+
- PyCharm Professional/Community
- Git

---

## Step-by-Step Setup

```bash
git clone https://github.com/Zaryab01/MultiLang-Menu-Django.git
cd MultiLang-Menu-Django

# Virtual Environment
python -m venv venv
source venv/bin/activate  # or venv\Scripts\activate on Windows

# Install Dependencies
pip install -r requirements.txt

# Django Setup
python manage.py migrate
python manage.py collectstatic

# Run Server
python manage.py runserver
