# Expo App Crash on Network Error

This repository demonstrates a bug in an Expo app where a network error during data fetching within a useEffect hook causes the app to crash.  The problem arises from improper error handling and a potential for undefined data from the API response.

## Bug Description

The app makes an API request using `fetch`.  If the request fails or the response data is malformed, the app crashes due to an unhandled error or attempt to access a non-existent property.

## Reproduction Steps

1. Clone this repository.
2. Navigate to the directory.
3. Run `npm install`.
4. Run `expo start`.
5. Observe the crash when the network request fails (e.g., by disconnecting from the internet). 

## Solution

The provided solution file (`bugSolution.js`) implements comprehensive error handling to prevent the app from crashing and provides a user-friendly message when the fetch fails.

## Technologies Used

- Expo
- React
- JavaScript