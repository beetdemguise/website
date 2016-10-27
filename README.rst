Welcome
=======
This repo contains the code for my person website.

Installation
============
Install [PyEnv][1]. This tool provides a nice
wrapper around the virtualenv tool. Once installed, use it to install Python 3.5.2:

```bash
pyevn install 3.5.2
```

Next, set up a virtualenv for the new version and write the name to the
`.python-version` file:

```bash
pyenv virtualenv 3.5.2 <some venv name>
cd /path/to/repo & echo <some venv name> > .python-version
```

Install the Python requirements:

```bash
pip install -r requirements-dev.txt
```


[1]: https://github.com/yyuu/pyenv


Install npm
1. Create `.bash_profile` in root directory if you don't have one
2. Install node via package manager (e.g. nvm)
3. To install nvm go to Terminal and run this command from root directory:
```bash
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.32.0/install.sh | bash
```
4. Restart terminal
5. If nvm is not a recognizeable command, edit `.bash_profile` and type
```bash
source ~/.bashrc
```
6. Run `nvm install node` in Terminal
7. Run `nvm use node` in Terminal

Localhost Usage
===============
To run the localhost environment simply cd into the website directory. Once there type `npm start -s` in Terminal and voila, an auto-reloading on file save localhost will be started.
