## Python Environment Setup

### Virtual Envionment
virtualenv --python=/usr/bin/python2.7 venv
. venv/bin/activate

Pip

ipython

requirements.txt

pip freeze > requirements.txt

pip install -r requirements.txt

jypyter notebook

### Python 2
```
from __future__ import division # backports python 3 division behavior to python 2 
from __future__ import print_function # backports python 3 print function to python 2
```

### Python Interpreter
`vars(object)` => look up object
`dir(object)` => function that looks up available attributes and methods on an object

### Misc
magic methods double underscore => system methods only called by python interpertor
single underscore => private methods