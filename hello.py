from flask import Flask, render_template, url_for
app = Flask(__name__)

@app.route('/')
@app.route('/home')
def home_page():
    return render_template('home.html', title = 'Home')

@app.route('/BigData')
def bigdata_page():
    return render_template('bigdata.html', title = 'Big Data')

#@app.route('/Services')
#def service_page():
#    return render_template('services.html')
 
#@app.route('/Products')
#def products_page():
#    return render_template('Products.html')

#@app.route('/Projects')
#def projects_page():
#    return render_template('Projects.html')

#@app.route('/AboutUs')
#def aboutUs_page():
#    return render_template('aboutUs.html')

if __name__ == "__main__":
    app.run(debug=True)