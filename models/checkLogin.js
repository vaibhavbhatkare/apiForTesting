const express = require('express');
const puppeteer = require('puppeteer');
const app = express();

async function login(req, res) {
    const username = "yashmega00@gmail.com"; // Username from the query parameters
    const password = "2596475y@Yl"; // Password from the query parameters

    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://profile.w3schools.com/');

    // Replace '#username' and '#password' with the actual selectors of the input fields
    await page.type('#modalusername', username);
    await page.type('#current-password', password);

    // Replace '#login-button' with the actual selector of the login button
    await Promise.all([
        page.waitForNavigation(), // The promise resolves after navigation has finished
        page.click('.Button_button__URNp+'), // Clicking the link will indirectly cause a navigation
    ]);

    let loginSuccessful;
    if (page.url() === 'https://my-learning.w3schools.com') {
        loginSuccessful = true;
    } else {
        loginSuccessful = false;
    }

    await browser.close();

    return res.json({ success: loginSuccessful });
}




module.exports={login}
