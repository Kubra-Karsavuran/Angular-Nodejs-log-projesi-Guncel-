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
  console.log("gelen dolu verı bakalım ne olacak");
  console.log(req.query);

  var veri = new Object();

  if (req.query.type !== "" && req.query.type !== undefined) {
    veri.type = new RegExp(req.query.type);
  }
  if (req.query.message !== "" && req.query.message !== undefined) {
    veri.message = new RegExp(req.query.message);
  }
  if (req.query.description !== "" && req.query.description !== undefined) {
    veri.description = new RegExp(req.query.description);
  }
  if (req.query.flight_id !== "" && req.query.flight_id !== undefined) {
    veri.flight_id = new RegExp(req.query.flight_id);
  }
  if (req.query.timestamp !== "" && req.query.timestamp !== undefined) {
    veri.timestamp = new RegExp(req.query.timestamp);
  }

  console.log(veri);

  titra_shema.find(veri).then((posts) => {
    console.log("veritabanı oldu");
    res.send(posts);
    console.log(posts);
  });
});

const port = 3000;
app.listen(port, () => {
  console.log("site http ye sıkıntısız baglana bıldı");
});
