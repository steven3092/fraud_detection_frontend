# Fraud Detection

Is an app you can see different heart beating monitors.

You take a mesure, each monitors take mesures in a different way and their payload is different as well.

When you click on 'Send data' the app call an api and POST the data to the backend, and the backend checks the value and return if it's a fraud or not.

I display the respense from the backend through a toast.

I built the backend with python Django available [here](https://github.com/steven3092/fraud_detection_backend)

Enjoy !

https://github.com/user-attachments/assets/4ff33dd0-3917-4d34-b145-dc59ef9e696d

# The project

To run the project in developement you have to run

```bash
npm install
```
The first time

and then 

```bash
npm run dev
```

# The tests


To run the test you have to run

```bash
npm run test
```

Here I use Vitest to simulate the DOM because it works more easily with Vite than Jest.

To run the test coverages

```bash
npm run coverage
```




