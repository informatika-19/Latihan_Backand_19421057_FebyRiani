const kegiatanModel = require('../model/kegiatan')

exports.create= (data) =>
  new Promise((resolve, reject)=> {
      
    //kegiatanModel.create() fungsi untuk menyimpan inputan daata
    kegiatanModel.create(data)
      .then(()=> resolve({
        status : true,
        pesan : 'berhasil iput'
      })).catch(()=> ({
        status : false,
        pesan : 'gagal iput'
      }))
  })
