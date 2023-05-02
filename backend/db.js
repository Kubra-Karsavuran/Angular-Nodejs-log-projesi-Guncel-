const express = require("express");
const app = express();

var titra_shema = require("./titra_shema");
const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1/nodeblog_db", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(express.json());

// TODO ekrana verılerı yansıtma ıslemı
app.get("/api/getall", (req, res) => {
  titra_shema.find({}).then((posts) => {
    res.send(posts);
    console.log("get geldi");
  });
});

// TODO benzersız typeler ıcın yazılan bır fonksıyondur
app.get("/api/typeget", (req, res) => {
  titra_shema.find({}).then((posts) => {
    var typeliste = [];

    posts.forEach(function (posts) {
      console.log(posts.type);
      var kontrol_veri = posts.type;

      if (typeof typeliste[0] == "undefined" || typeliste[0] == null) {
        console.log("ilk veri burda eklendi:");
        console.log(kontrol_veri);
        typeliste.push(kontrol_veri);
      } else {
        for (let veriler of typeliste) {
          if (veriler == kontrol_veri) {
            var deneme = 10;
            break;
          }
        }
        if (deneme != 10) {
          console.log("yenı verı eklendı ");
          typeliste.push(posts.type);
        }
      }
    });

    console.log("dizi kontrolu: ");
    console.log(typeliste);
    res.send(typeliste);
  }); // bunun dısında dızı yazdırma
});

app.get("/api/sonuc/:text/:text1/:text2/:text3/:typesecilen", (req, res) => {
  console.log("bakalım fonksıyon calısacakmı");
  console.log(req.params.text); // mesaj
  console.log(req.params.text1); //zaman
  console.log(req.params.text2); // description
  console.log(req.params.text3); //flight
  console.log(req.params.typesecilen); //type

  titra_shema.find({ type: req.params.typesecilen }).then((posts) => {
    // res.send(posts);
    console.log("oldu sanırım");
  });
});

const port = 3000;
app.listen(port, () => {
  console.log("site http ye sıkıntısız baglana bıldı");
});
