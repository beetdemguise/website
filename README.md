# website
My personal website

# environment setup
Install npm
1. Create .bash_profile in root directory if you don't have one
2. Install node via package manager (e.g. nvm)
3. To install nvm go to Terminal and run this command from root directory:
`curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.32.0/install.sh | bash`
4. Restart terminal
5. If nvm is not a recognizeable command, edit .bash_profile and type: source ~/.bashrc
6. Run `nvm install node` in Terminal
7. Run `nvm use node` in Terminal

# localhost usage
To run the localhost environment simply cd into the website directory. Once there type `npm start -s` in Terminal and voila, an auto-reloading on file save localhost will be started.
