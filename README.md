# Snipsound Front end
This is the Front end of the Snipsound mobile app. It consists of three screens: Login, SoundList and Recording. The SoundList screen also has a modal for 
detailed view of each component. I made the whole backend from scratch for this project, so I would appreciate it if you checked that out as well. 
If you wish to host your own backend, simply change the IP of the fetchPosts() in src/state/SoundSlice.tsx and in saveSound() in src/screens/Recording.tsx.
Made in React Native (TypeScript) with the much needed help of Expo and the Expo Command Line Interface

# Notable technologies
* Expo-av (for Audio file handling)
* Expo-file-system (for using the phones file system)
* Expo-google-fonts (for beautiful fonts)
The rest are in package.json

# Testing
## End 2 end testing
I did manually end 2 end test the app on an iPhone XR using the Expo app, and on an emulated Pixel XL.
The following end 2 end tests were succesfully executed:
#### Login screen - As a user trying to log in to Snipsound:
* Trying to log in with a name that's either too short or too long
* Trying to press enter without writing anything
* Leaving and entering the login screen and ensuring that the name is still there
#### Snipsound screen (main screen) - As a user wanting to browse and listen to Snipsounds:
* Trying to rapidly change between sorting categories
* Trying to search for an artist that does not exist 
* Trying to open up a detailed view of a song, playing the song, and then X-ing out the window without pausing first
* Trying to play multiple songs after each other
* Trying to search for an artist that does exist, and then changing the sorting
* Trying out pagination functionality
* Leaving and entering main screen and ensuring that the filtering has been reset
* Ensuring that when the logged in user posts a recording the "By [person]" title says "By You!"
#### Recording screen - As a user wanting to record a Snipsound:
* Ensuring that iOS and Android users are asked for recording permissions
* Trying to type a title that's too long
* Trying to fill in a description that's too long
* Trying to rapidly change between categories
* Ensuring that the file is uploaded to the server
* Ensuring that the first file in the main screen is the newly recorded file
## Jest
`yarn test` 
## Cypress
`yarn run cypress open`</br></br>
Since Cypress does not have native support for React-native, I was only able to do one test on the Login Screen. This is because the main screen does not work
on the web browser. 
## Server side manual testing
* Ensuring that the server does not get more than one file
* Ensuring that the server converts .caf files to .mp3 files
* Ensuring that the MongoDB backend gets correct filename
* Ensuring that 

# State management
The state is managed using Redux with two slices. One for the API query parameter, and one containing the data fetched by the API the currently logged in user.
It uses an async thunk for fetching and pagination is achieved by altering how many entries we ask of the backend whenever the user is near the bottom of the 
scrollable list in SoundList.
