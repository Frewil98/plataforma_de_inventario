from flask import Flask,render_template
app = Flask(__name__)

@app.route('/')
def signin():
    return render_template('paginaprincipal.html')
    
@app.route('/login')
def login():
    return render_template('login.html')

@app.route('/usuario')
def usuario():
    return render_template('usuariofinal.html')