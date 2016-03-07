var express     = require('express'),
    multer      = require('multer'),
    uploader    = multer({ dest: './uploads/' }),
    app         = express();
    
app.set('view engine', 'ejs');
app.use(express.static('public'));

// ROUTES

app.get('/', function(req, res) {
    res.render('home');
});

app.post('/upload', uploader.single('misc_file'), function(req, res) {
    if (req.file === undefined) {
        res.send({ 'error': 'there was an error accepting your file or a valid file was never selected' });
        return;
    }
    res.send({ 'file_size': req.file.size + ' bytes' });
});

// Start Server
app.listen(process.env.PORT, function() {
    console.log('server started...');
});