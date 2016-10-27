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