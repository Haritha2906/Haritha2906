
# 🔌 Smart Grid Energy Consumption Forecasting

> Predicting energy consumption patterns using time series forecasting for smart grid optimization.

## 📚 Overview

As global energy demand rises and the shift to sustainable sources accelerates, managing energy consumption efficiently becomes critical. This project uses **time series forecasting** to predict energy consumption patterns in smart grids, enabling:

- Proactive load balancing
- Demand-response strategies
- Renewable energy integration
- Cost-effective power distribution

## 🧠 Key Features

- 🔍 Exploratory Data Analysis (EDA) for trend, seasonality, anomaly detection
- 🔄 Time Series Models: **ARIMA**, **LSTM**, **Prophet**
- 🌡️ External factor integration (temperature, holidays, time-of-day)
- 📊 Interactive visualizations using Plotly
- 🌐 Flask-based web app for viewing predictions
- 📦 Clean code with modular structure and reproducibility

## 🛠️ Tech Stack

| Component            | Tools/Frameworks                        |
|----------------------|-----------------------------------------|
| Language             | Python 3.x                              |
| Environment          | Google Colab / Jupyter / VS Code        |
| Data Processing      | pandas, numpy                           |
| Visualization        | matplotlib, seaborn, plotly             |
| Time Series Models   | ARIMA (statsmodels), Prophet, LSTM (Keras) |
| Web App              | Flask, HTML/CSS                         |
| Dashboard (Optional) | Power BI / Tableau                      |

## 🗂️ Project Structure

.
├── data/ # Dataset (CSV files)
├── model/ # Trained models (Pickle files)
├── templates/ # HTML templates for Flask app
├── static/ # CSS files
├── app.py # Main Flask app
├── data_access.py # Data loading and forecasting logic
├── README.md # Project readme (this file)
└── report/ # Final project report and presentation

bash
Copy
Edit

## 📈 Sample Forecast Output

![Forecast](static/sample_forecast.png)

## 🚀 How to Run the Project

1. **Clone the Repository**
```bash
git clone https://github.com/selvi2106/Phase3.git
cd Phase3
Set Up Environment

bash
Copy
Edit
pip install -r requirements.txt
Run Flask App

bash
Copy
Edit
python app.py
View in Browser

cpp
Copy
Edit
http://127.0.0.1:5000/
