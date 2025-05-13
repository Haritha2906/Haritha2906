# Simple model prediction script

import pickle  # used to load the saved model

# Step 1: Load the trained model
with open('model/trained_model.pkl', 'rb') as file:
    model = pickle.load(file)

# Step 2: Use the model to predict next 5 values
# (this assumes your model supports get_forecast like SARIMA)
forecast = model.get_forecast(steps=5)  # change steps as needed
predictions = forecast.predicted_mean   # get the predicted values

# Step 3: Print the predictions
print("Predicted Energy Consumption for next 5 time steps:")
print(predictions)
