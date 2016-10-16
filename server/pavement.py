from paver.easy import task


@task
def lint():
    import os
    from pylint import epylint as linter

    linter.py_run(os.path.abspath(__file__))
