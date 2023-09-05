<div align="center">
  <a href="https://github.com/TheBous">
    <img src="/public/svelte-firebase.png" alt="logo" width="200"/>
  </a>
  <br>
  <br>
</div>

# QR codes presentation

Welcome to the QR codes presentation, a web application built with Svelte, Firebase, Tailwind and DaisyUI to show a presentation of QR Codes programmed by the user for meeting or events

## Tech stack

- Svelte Framework: Leverage the power of the Svelte framework for building efficient and reactive user interfaces. The project structure is designed to help you organize your components, styles, and logic effectively.

- Firebase Integration: Easily connect your application to Firebase, a powerful backend-as-a-service platform. Utilize Firebase Authentication for user management, Firebase Realtime Database for real-time data synchronization, and Firebase Storage for storing user-generated content.

- Firestore Connectivity: Take advantage of Firestore, Firebase's cloud-based NoSQL database, to store structured data and enable seamless data synchronization across clients. The boilerplate provides examples of how to perform CRUD operations with Firestore.

- Tailwind CSS: Streamline your styling process with Tailwind CSS, a utility-first CSS framework. Enjoy the benefits of pre-designed components and responsive design out of the box, while also being able to customize the design to fit your project's unique identity.

- Daisy UI Integration: Enhance your user interface with Daisy UI components, a set of responsive and elegant UI elements built on top of Tailwind CSS. These components facilitate the creation of visually appealing and functional user interfaces.

## Features

- `/home?qr=ch_group` --> Show the first image of images array in allQrs.ts file
- `/home?qr=ch_group&pretimer=20` --> Show a pre timer of 20" in the page and then the first image of images array in allQrs.ts file
- `/home?qr=ch_group&pretimer=20&format=hour` --> Show a pre timer of 20" with hour format in the page and then the first image of images array in allQrs.ts file
- `/home?qr=ch_group&pretimer=20&posttimer=20` --> Show a pre timer in the page and then a carousel with a duration of 20 seconds for each image.
- `/home?qr=ch_group&pretimer=20&posttimer=20&timer=20` --> Show a pre timer in the page, a timer for pre-viewing the QR code and then a carousel with a duration of  20 seconds for each image.
- `/home?qr=ch_group&pretimer=20&posttimer=20&timer=20&loop=true` --> Same as before but with looping
- `/home?qr=ch_group&pretimer=20&posttimer=20&timer=20&loop=true&skip` --> Same as before but start with n image of the array







## Installation

- Clone it
- Install deps
```bash
npm i
```
- Copy .env.example file in .env and fill it with your Firebase configs


🎉 Enjoy your easiest and cheapest way to create a Svelte-Firebase application! 🎉
