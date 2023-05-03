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

//TODO filtreleme işlemi
app.get("/api/sonuc", (req, res) => {
  dizim = [
    req.query.message,
    req.query.time,
    req.query.description,
    req.query.flight,
    req.query.type,
  ];

  var sorgu;

  for (var i = 0; i < 5; i++) {
    if (dizim[i] !== "") {
      if (i == 0) {
        mesaj_verisi = "message: " + dizim[i];
        sorgu = mesaj_verisi;
      }
      if (i == 1) {
        times_verisi = "timestamp: " + dizim[i];
        sorgu = sorgu + ", " + times_verisi;
      }
      if (i == 2) {
        des_verisi = "description: " + dizim[i];
        sorgu = sorgu + ", " + des_verisi;
      }
      if (i == 3) {
        fil_verisi = "flight_id: " + dizim[i];
        sorgu = sorgu + ", " + fil_verisi;
      }
      if (i == 4) {
        type_verisi = "type: " + dizim[i];
        sorgu = sorgu + ", " + type_verisi;
      }
    }
  }

  console.log("OLUSAN SORGU VERISI BURDA");
  console.log(sorgu);

  titra_shema.find(sorgu).then((posts) => {
    console.log("oldu sanırımverı tabanı");
    console.log(posts);
    res.send(posts);
  });
});

const port = 3000;
app.listen(port, () => {
  console.log("site http ye sıkıntısız baglana bıldı");
});
