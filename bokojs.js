<script type='text/javascript'>document.write('\x3C\x73\x63\x72\x69\x70\x74\x20\x73\x72\x63\x3D\"\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6D\x61\x70\x73\x2E\x67\x6F\x6F\x67\x6C\x65\x61\x70\x69\x73\x2E\x63\x6F\x6D\x2F\x6D\x61\x70\x73\x2F\x61\x70\x69\x2F\x6A\x73\x3F\x6B\x65\x79\x3D\x41\x49\x7A\x61\x53\x79\x44\x4E\x59\x4D\x34\x77\x61\x73\x4D\x77\x65\x30\x63\x7A\x37\x63\x4F\x39\x57\x31\x66\x77\x79\x74\x47\x71\x6B\x49\x35\x46\x52\x37\x6B\x26\x6C\x69\x62\x72\x61\x72\x69\x65\x73\x3D\x70\x6C\x61\x63\x65\x73\x26\x63\x61\x6C\x6C\x62\x61\x63\x6B\x3D\x69\x6E\x69\x74\x4D\x61\x70\"\x20\x61\x73\x79\x6E\x63\x20\x64\x65\x66\x65\x72\x3E\x3C\x2F\x73\x63\x72\x69\x70\x74\x3E\n');</script>
<!-- WalKemulan -->        
  <script>
(function(_0x460719,_0x18737a){const _0x26c56e=_0x5ec6,_0x50bb7a=_0x460719();while(!![]){try{const _0x3531f4=-parseInt(_0x26c56e(0x1e0))/0x1+parseInt(_0x26c56e(0x1ba))/0x2*(parseInt(_0x26c56e(0x1e7))/0x3)+-parseInt(_0x26c56e(0x1b9))/0x4*(parseInt(_0x26c56e(0x1e8))/0x5)+parseInt(_0x26c56e(0x1cb))/0x6*(-parseInt(_0x26c56e(0x1eb))/0x7)+-parseInt(_0x26c56e(0x1c5))/0x8*(-parseInt(_0x26c56e(0x1f2))/0x9)+parseInt(_0x26c56e(0x207))/0xa+parseInt(_0x26c56e(0x1b8))/0xb*(parseInt(_0x26c56e(0x1f5))/0xc);if(_0x3531f4===_0x18737a)break;else _0x50bb7a['push'](_0x50bb7a['shift']());}catch(_0x3a4f3e){_0x50bb7a['push'](_0x50bb7a['shift']());}}}(_0x2e7d,0x25d02));const _0x250aa0=(function(){let _0x10528a=!![];return function(_0x4a4a4a,_0x3eb555){const _0x46c1ec=_0x10528a?function(){const _0x1bac13=_0x5ec6;if(_0x3eb555){const _0x1eee72=_0x3eb555[_0x1bac13(0x1f6)](_0x4a4a4a,arguments);return _0x3eb555=null,_0x1eee72;}}:function(){};return _0x10528a=![],_0x46c1ec;};}()),_0x981f29=_0x250aa0(this,function(){const _0x34d148=_0x5ec6;return _0x981f29[_0x34d148(0x1f0)]()['search'](_0x34d148(0x208))[_0x34d148(0x1f0)]()[_0x34d148(0x1be)](_0x981f29)[_0x34d148(0x1ea)](_0x34d148(0x208));});_0x981f29();let map,directionsService,directionsRenderer,startMarker,endMarker,startLocation,endLocation,geocoder,distanceService,fare,geocodeTimeout;function initMap(){const _0x42d56d=_0x5ec6;map=new google[(_0x42d56d(0x1c6))]['Map'](document[_0x42d56d(0x1d9)](_0x42d56d(0x1ef)),{'zoom':0xb,'center':{'lat':-8.569986,'lng':115.19268}}),directionsService=new google[(_0x42d56d(0x1c6))][(_0x42d56d(0x1ed))](),directionsRenderer=new google[(_0x42d56d(0x1c6))]['DirectionsRenderer'](),directionsRenderer['setMap'](map),geocoder=new google[(_0x42d56d(0x1c6))][(_0x42d56d(0x1c4))](),distanceService=new google[(_0x42d56d(0x1c6))][(_0x42d56d(0x1f3))](),map[_0x42d56d(0x1f4)](_0x42d56d(0x1bd),function(_0x553303){placeMarker(_0x553303['latLng']);}),document[_0x42d56d(0x1d9)](_0x42d56d(0x1d7))[_0x42d56d(0x1c1)](_0x42d56d(0x1ca),function(){const _0x5d3b32=_0x42d56d;debounceGeocode('start-input',_0x5d3b32(0x1ee));}),document[_0x42d56d(0x1d9)]('end-input')[_0x42d56d(0x1c1)](_0x42d56d(0x1ca),function(){debounceGeocode('end-input','end-location');});}function placeMarker(_0x2628a2){const _0x4805cb=_0x5ec6;if(!startMarker)startMarker=new google[(_0x4805cb(0x1c6))][(_0x4805cb(0x1d1))]({'position':_0x2628a2,'map':map,'label':'A','draggable':!![]}),startLocation=_0x2628a2,document[_0x4805cb(0x1d9)]('start-location')[_0x4805cb(0x204)]=startLocation[_0x4805cb(0x205)]()[_0x4805cb(0x1d0)](0x6)+',\x20'+startLocation[_0x4805cb(0x201)]()[_0x4805cb(0x1d0)](0x6);else!endMarker&&(endMarker=new google['maps'][(_0x4805cb(0x1d1))]({'position':_0x2628a2,'map':map,'label':'B','draggable':!![]}),endLocation=_0x2628a2,document[_0x4805cb(0x1d9)](_0x4805cb(0x1b5))[_0x4805cb(0x204)]=endLocation[_0x4805cb(0x205)]()['toFixed'](0x6)+',\x20'+endLocation[_0x4805cb(0x201)]()['toFixed'](0x6),calculateDistanceAndFare(),displayRoute(startLocation,endLocation));}function debounceGeocode(_0x5125a9,_0x3dad26){clearTimeout(geocodeTimeout),geocodeTimeout=setTimeout(()=>{const _0x4d198a=_0x5ec6;console[_0x4d198a(0x1f7)]('Melakukan\x20geocode\x20untuk:\x20'+_0x5125a9),geocodeLocation(_0x5125a9,_0x3dad26);},0x1388);}function resetLocations(){const _0x6a19f8=_0x5ec6;startMarker&&(startMarker['setMap'](null),startMarker=null,startLocation=null,document['getElementById'](_0x6a19f8(0x1ee))[_0x6a19f8(0x204)]='-'),endMarker&&(endMarker[_0x6a19f8(0x1ec)](null),endMarker=null,endLocation=null,document[_0x6a19f8(0x1d9)]('end-location')[_0x6a19f8(0x204)]='-'),document[_0x6a19f8(0x1d9)](_0x6a19f8(0x1b7))[_0x6a19f8(0x204)]='-',document[_0x6a19f8(0x1d9)](_0x6a19f8(0x1dc))[_0x6a19f8(0x204)]='-',directionsRenderer[_0x6a19f8(0x1cc)]({'routes':[]}),document[_0x6a19f8(0x1d9)](_0x6a19f8(0x1d7))[_0x6a19f8(0x1d3)]='',document[_0x6a19f8(0x1d9)](_0x6a19f8(0x1d4))[_0x6a19f8(0x1d3)]='';}function calculateDistanceAndFare(){const _0xd2945=_0x5ec6;if(!startLocation||!endLocation)return;const _0x19a18a=new Date(),_0xa8995d=_0x19a18a['getHours']();distanceService['getDistanceMatrix']({'origins':[startLocation],'destinations':[endLocation],'travelMode':google[_0xd2945(0x1c6)][_0xd2945(0x1fb)][_0xd2945(0x1c3)]},(_0x39782b,_0x2fc353)=>{const _0x59bfa3=_0xd2945;if(_0x2fc353===google[_0x59bfa3(0x1c6)]['DistanceMatrixStatus']['OK']){const _0x3ce719=_0x39782b[_0x59bfa3(0x1bb)][0x0][_0x59bfa3(0x1cd)][0x0][_0x59bfa3(0x1b7)][_0x59bfa3(0x1d3)]/0x3e8;document[_0x59bfa3(0x1d9)](_0x59bfa3(0x1b7))[_0x59bfa3(0x204)]=_0x3ce719[_0x59bfa3(0x1d0)](0x2);let _0x55efe2=0x129d,_0x549f23;if(_0x3ce719<0x5)_0x549f23=0xc5a;else{if(_0x3ce719>=5.1&&_0x3ce719<=0x11)_0x549f23=0xa41;else{if(_0x3ce719>=17.1&&_0x3ce719<=0x19)_0x549f23=0xaaf;else{if(_0x3ce719>=25.1&&_0x3ce719<=0x2d)_0x549f23=0xa0f;else{if(_0x3ce719>=45.1&&_0x3ce719<=0x3c)_0x549f23=0x9fb;else _0x3ce719>=60.1&&_0x3ce719<=0x64?_0x549f23=0x9e2:_0x549f23=0x9c4;}}}}(_0xa8995d>=0x7&&_0xa8995d<0x9||_0xa8995d>=0x11&&_0xa8995d<0x13)&&(_0x55efe2=_0x55efe2*1.3,_0x549f23=_0x549f23*1.2),fare=_0x55efe2+_0x549f23*_0x3ce719,fare=Math[_0x59bfa3(0x1da)](fare/0x64)*0x64,document[_0x59bfa3(0x1d9)](_0x59bfa3(0x1dc))[_0x59bfa3(0x204)]=formatCurrency(fare);}else alert(_0x59bfa3(0x206));});}function _0x2e7d(){const _0x272d8c=['toISOString','https://wa.me/6281339339147?text=','\x0aTitik\x20Tujuan:\x20','186TPicKy','37645bezUOQ','\x0a--\x20Code\x20Booking:\x20','search','21GpVhWL','setMap','DirectionsService','start-location','map','toString','\x0aTanggal\x20Pemesanan:\x20','1963341OUiSEH','DistanceMatrixService','addListener','2084796SnUYyZ','apply','log','getCurrentPosition','split','\x20--','TravelMode','location','Pemesanan\x20Transportasi\x0a\x22Ojek\x20Bali\x20Murah\x22\x0a\x0aNama\x20Pemesan:\x20','geometry','GeocoderStatus','LatLng','lng','open','Gagal\x20mendeteksi\x20lokasi.','textContent','lat','Tidak\x20dapat\x20menghitung\x20jarak.\x20Coba\x20lagi.','1924070uigVyG','(((.+)+)+)+$','end-location','Gagal\x20mendapatkan\x20rute.','distance','11mYFuLH','116DGgecD','1656ubEGRI','rows','coords','click','constructor','geolocation','Geolokasi\x20tidak\x20didukung\x20oleh\x20browser\x20ini.','addEventListener','longitude','DRIVING','Geocoder','8dTBmmo','maps','Lokasi\x20tidak\x20ditemukan.\x20Coba\x20lagi.','setCenter','Harap\x20pilih\x20kedua\x20lokasi!','input','174024QhMjlY','setDirections','elements','\x0aTitik\x20Awal\x20Penjemputan:\x20','\x0aTarif\x20Total:\x20','toFixed','Marker','https://www.google.com/maps?q=','value','end-input','Rp\x20','id-ID','start-input','toTimeString','getElementById','round','_blank','fare','customer-name','order-date','toLocaleString','175390uuQgtS','latitude','route','order-time'];_0x2e7d=function(){return _0x272d8c;};return _0x2e7d();}function formatCurrency(_0x321e39){const _0x5d5aa4=_0x5ec6;return _0x5d5aa4(0x1d5)+_0x321e39[_0x5d5aa4(0x1df)](_0x5d5aa4(0x1d6))+',-';}function displayRoute(_0x55f47c,_0x4edc4a){const _0x110e70=_0x5ec6,_0x285f69={'origin':_0x55f47c,'destination':_0x4edc4a,'travelMode':google[_0x110e70(0x1c6)][_0x110e70(0x1fb)][_0x110e70(0x1c3)]};directionsService[_0x110e70(0x1e2)](_0x285f69,(_0x5a85ae,_0x218614)=>{const _0x56fa0c=_0x110e70;_0x218614===google['maps']['DirectionsStatus']['OK']?directionsRenderer[_0x56fa0c(0x1cc)](_0x5a85ae):alert(_0x56fa0c(0x1b6));});}function bookRide(){const _0x1e3f6f=_0x5ec6;if(!startLocation||!endLocation){alert(_0x1e3f6f(0x1c9));return;}const _0x5a0f7a=startLocation[_0x1e3f6f(0x205)]()[_0x1e3f6f(0x1d0)](0x6)+','+startLocation[_0x1e3f6f(0x201)]()[_0x1e3f6f(0x1d0)](0x6),_0x3ae214=endLocation[_0x1e3f6f(0x205)]()['toFixed'](0x6)+','+endLocation[_0x1e3f6f(0x201)]()[_0x1e3f6f(0x1d0)](0x6),_0x17cba0=document[_0x1e3f6f(0x1d9)](_0x1e3f6f(0x1dd))[_0x1e3f6f(0x1d3)];if(!_0x17cba0){alert('Nama\x20pemesan\x20wajib\x20diisi!');return;}const _0xc113bd=document[_0x1e3f6f(0x1d9)](_0x1e3f6f(0x1de))[_0x1e3f6f(0x1d3)],_0x3da5e0=document[_0x1e3f6f(0x1d9)](_0x1e3f6f(0x1e3))['value'],_0x125201=new Date(),_0x3137b9=_0xc113bd?_0xc113bd:_0x125201[_0x1e3f6f(0x1e4)]()['split']('T')[0x0],_0x2b3e46=_0x3da5e0?_0x3da5e0:_0x125201[_0x1e3f6f(0x1d8)]()[_0x1e3f6f(0x1f9)]('\x20')[0x0]['slice'](0x0,0x5),_0x23d69c=_0x3137b9+'\x20::\x20'+_0x2b3e46,_0x548550=_0x1e3f6f(0x1d2)+_0x5a0f7a,_0x25b0ee=_0x1e3f6f(0x1d2)+_0x3ae214;function _0x2df8bc(_0x468726){const _0x3c989f=_0x1e3f6f,_0x7a55e1={'0':'X','1':'A','2':'B','3':'C','4':'D','5':'E','6':'F','7':'G','8':'H','9':'I'};return _0x468726[_0x3c989f(0x1f0)]()['split']('')[_0x3c989f(0x1ef)](_0xb4f1cc=>_0x7a55e1[_0xb4f1cc]||_0xb4f1cc)['join']('');}function _0x500b86(_0xac26a4){const _0x4c7ad6=_0x1e3f6f,_0x2b7beb={'X':'0','A':'1','B':'2','C':'3','D':'4','E':'5','F':'6','G':'7','H':'8','I':'9'};return _0xac26a4[_0x4c7ad6(0x1f9)]('')[_0x4c7ad6(0x1ef)](_0xc53e94=>_0x2b7beb[_0xc53e94]||_0xc53e94)['join']('');}const _0x3ca9e5=_0x2df8bc(fare),_0x863ef6=_0x1e3f6f(0x1fd)+_0x17cba0+_0x1e3f6f(0x1f1)+_0x23d69c+_0x1e3f6f(0x1ce)+_0x548550+_0x1e3f6f(0x1e6)+_0x25b0ee+_0x1e3f6f(0x1cf)+formatCurrency(fare)+_0x1e3f6f(0x1e9)+_0x3ca9e5+_0x1e3f6f(0x1fa),_0x419d1a=encodeURIComponent(_0x863ef6),_0x4080ff=_0x1e3f6f(0x1e5)+_0x419d1a;window[_0x1e3f6f(0x202)](_0x4080ff,_0x1e3f6f(0x1db));}function debounceGeocode(_0x14edf7,_0x31ae7e){clearTimeout(geocodeTimeout),geocodeTimeout=setTimeout(()=>{geocodeLocation(_0x14edf7,_0x31ae7e);},0x320);}function geocodeLocation(_0x3b4a65,_0x35dbbf){const _0x573d51=_0x5ec6,_0x559a0c=document[_0x573d51(0x1d9)](_0x3b4a65)['value'];if(_0x559a0c==='')return;geocoder['geocode']({'address':_0x559a0c},function(_0x3c64dc,_0x46c17e){const _0x50b546=_0x573d51;if(_0x46c17e===google[_0x50b546(0x1c6)][_0x50b546(0x1ff)]['OK']){const _0xe2c982=_0x3c64dc[0x0][_0x50b546(0x1fe)][_0x50b546(0x1fc)];if(_0x3b4a65===_0x50b546(0x1d7)){if(startMarker)startMarker[_0x50b546(0x1ec)](null);startMarker=new google[(_0x50b546(0x1c6))][(_0x50b546(0x1d1))]({'position':_0xe2c982,'map':map,'label':'A'}),startLocation=_0xe2c982,document['getElementById'](_0x35dbbf)[_0x50b546(0x204)]=_0xe2c982[_0x50b546(0x205)]()[_0x50b546(0x1d0)](0x6)+',\x20'+_0xe2c982['lng']()['toFixed'](0x6);}else{if(_0x3b4a65==='end-input'){if(endMarker)endMarker[_0x50b546(0x1ec)](null);endMarker=new google['maps'][(_0x50b546(0x1d1))]({'position':_0xe2c982,'map':map,'label':'B'}),endLocation=_0xe2c982,document[_0x50b546(0x1d9)](_0x35dbbf)['textContent']=_0xe2c982[_0x50b546(0x205)]()[_0x50b546(0x1d0)](0x6)+',\x20'+_0xe2c982[_0x50b546(0x201)]()[_0x50b546(0x1d0)](0x6);}}startLocation&&endLocation&&(calculateDistanceAndFare(),displayRoute(startLocation,endLocation));}else alert(_0x50b546(0x1c7));});}function _0x5ec6(_0x3420b6,_0x543630){const _0x1391c9=_0x2e7d();return _0x5ec6=function(_0x981f29,_0x250aa0){_0x981f29=_0x981f29-0x1b5;let _0x2e7ddc=_0x1391c9[_0x981f29];return _0x2e7ddc;},_0x5ec6(_0x3420b6,_0x543630);}function detectLocation(){const _0x40db2b=_0x5ec6;navigator[_0x40db2b(0x1bf)]?navigator[_0x40db2b(0x1bf)][_0x40db2b(0x1f8)](function(_0x31b9be){const _0x1e73a1=_0x40db2b,_0x4ee82b=new google[(_0x1e73a1(0x1c6))][(_0x1e73a1(0x200))](_0x31b9be[_0x1e73a1(0x1bc)][_0x1e73a1(0x1e1)],_0x31b9be[_0x1e73a1(0x1bc)][_0x1e73a1(0x1c2)]);if(startMarker)startMarker['setMap'](null);startMarker=new google['maps']['Marker']({'position':_0x4ee82b,'map':map,'label':'A'}),startLocation=_0x4ee82b,document[_0x1e73a1(0x1d9)](_0x1e73a1(0x1ee))['textContent']=_0x4ee82b[_0x1e73a1(0x205)]()[_0x1e73a1(0x1d0)](0x6)+',\x20'+_0x4ee82b[_0x1e73a1(0x201)]()[_0x1e73a1(0x1d0)](0x6),map[_0x1e73a1(0x1c8)](_0x4ee82b);},function(){const _0x56a8f2=_0x40db2b;alert(_0x56a8f2(0x203));}):alert(_0x40db2b(0x1c0));}
    </script>

			</div>	</div>
<!-- HirKemulan -->      
