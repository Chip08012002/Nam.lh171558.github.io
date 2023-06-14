const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const PlAYER_STORAGE_KEY = "F8_PLAYER";

const player = $(".player");
const cd = $(".cd");
const heading = $("header h2");
const cdThumb = $(".cd-thumb");
const audio = $("#audio");
const playBtn = $(".btn-toggle-play");
const progress = $("#progress");
const prevBtn = $(".btn-prev");
const nextBtn = $(".btn-next");
const randomBtn = $(".btn-random");
const repeatBtn = $(".btn-repeat");
const playlist = $(".playlist");


  const app = {
    currentIndex: 0,
  isPlaying: false,
  isRandom: false,
  isRepeat: false,
  config: {},
      songs: [
          {
            name: 'Anh sai rồi',
            singer: 'SƠN TÙNG MTP',
            path: 'music/song1.mp3',
            image:'img/song1.jpg'
          },
          {
              name: 'Chắc ai đó sẽ về',
              singer: 'SƠN TÙNG MTP',
              path: 'music/song2.mp3', 
              image:'img/song2.jpg' 
            },
            {
              name: 'Chiều hôm ấy',
              singer: 'JAYKII',
              path: 'music/song3.mp3', 
              image:'img/song3.jpg' 
            },
            {
              name: 'Chuyện rằng',
              singer: 'THỊNH SUY',
              path: 'music/song4.mp3', 
              image:'img/song4.jpg' 
            },
            {
              name: 'Có em chờ',
              singer: 'MIN',
              path: 'music/song5.mp3', 
              image:'img/song5.jpg' 
            },
            {
              name: 'Crying over you', 
              singer: 'JUSTATEE',
              path: 'music/song6.mp3', 
              image:'img/song6.jpg' 
            },
            {
              name: 'Đừng xin lỗi nữa', 
              singer: 'ERIK',
              path: 'music/song7.mp3', 
              image:'img/song7.jpg' 
            },
            {
              name: 'Em của ngày hôm qua',
              singer: 'SON TÙNG MTP',
              path: 'music/song8.mp3', 
              image:'img/song8.jpg' 
            },
            {
              name: 'Lạc trôi',
              singer: 'SON TÙNG MTP',
              path: 'music/song9.mp3', 
              image:'img/song9.jpg' 
            },
            {
              name: 'Phía sau em', 
              singer: 'KAY TRẦN',
              path: 'music/song10.mp3', 
              image:'img/song10.jpg' 
            },
            {
              name: 'Cùng anh', 
              singer: 'NGỌC DOLLY',
              path: 'music/song11.mp3', 
              image:'img/song11.jpg' 
            },
            {
              name: 'Hôm nay tôi buồn', 
              singer: 'PHÙNG KHÁNH LINH',
              path: 'music/song12.mp3', 
              image:'img/song12.jpg' 
            },
            {
              name: 'Vết mưa', 
              singer: 'VŨ CÁT TƯỜNG',
              path: 'music/song13.mp3', 
              image:'img/song13.jpg' 
            },
            {
              name: 'Tini-love', 
              singer: 'Hoàng Dũng',
              path: 'music/song14.mp3', 
              image:'img/song14.jpg' 
            },
            {
              name: 'Đường một chiều', 
              singer: 'HUỲNH TÚ',
              path: 'music/song15.mp3', 
              image:'img/song15.jpg' 
            },
            {
              name: 'Vô Tình', 
              singer: 'HOAPROX & XEXI',
              path: 'music/song16.mp3', 
              image:'img/song16.jpg' 
            },
            
            {
              name: 'Bác Hồ một tình yêu bao la', 
              singer: 'THU HIỀN',
              path: 'music/song17.mp3', 
              image:'img/song17.jpg' 
            },
            {
              name: 'Duyên phận', 
              singer: 'NHƯ QUỲNH',
              path: 'music/song18.mp3', 
              image:'img/song18.jpg' 
            },
            {
              name: 'Gửi em ở cuối sông Hồng', 
              singer: 'VIỆT HOÀN & ANH THƠ',
              path: 'music/song19.mp3', 
              image:'img/song19.jpg' 
            },
            {
              name: 'Sầu tím thiệp hồng', 
              singer: 'LƯU ÁNH ĐOAN & ĐOÀN MINH',
              path: 'music/song20.mp3', 
              image:'img/song20.jpg' 
            },
            {
              name: 'Gặp nhau trong rừng mơ', 
              singer: 'TAN NHAN',
              path: 'music/song21.mp3', 
              image:'img/song21.jpg' 
            },
            {
              name: 'Tình ca Tây Bắc', 
              singer: 'TRỌNG TẤN & VI HOA',
              path: 'music/song22.mp3', 
              image:'img/song22.jpg' 
            },
            {
              name: 'Vùng lá me bay', 
              singer: 'NHƯ QUỲNH',
              path: 'music/song23.mp3', 
              image:'img/song23.jpg' 
            },
      ],

      setConfig: function (key, value) {
        this.config[key] = value;
        // (2/2) Uncomment the line below to use localStorage
        // localStorage.setItem(PlAYER_STORAGE_KEY, JSON.stringify(this.config));
      },
      render: function () {
        const htmls = this.songs.map((song, index) => {
          return `
                            <div class="song ${
                              index === this.currentIndex ? "active" : ""
                            }" data-index="${index}">
                                <div class="thumb"
                                    style="background-image: url('${song.image}')">
                                </div>
                                <div class="body">
                                    <h3 class="title">${song.name}</h3>
                                    <p class="author">${song.singer}</p>
                                </div>
                                <div class="option">
                                    <i class="fas fa-ellipsis-h"></i>
                                </div>
                            </div>
                        `;
        });
        playlist.innerHTML = htmls.join("");
      },
      defineProperties: function () {
        Object.defineProperty(this, "currentSong", {
          get: function () {
            return this.songs[this.currentIndex];
          }
        });
      },
      handleEvents: function () {
        const _this = this;
        const cdWidth = cd.offsetWidth;
    
        // Xử lý CD quay / dừng
        // Handle CD spins / stops
        const cdThumbAnimate = cdThumb.animate([{ transform: "rotate(360deg)" }], {
          duration: 10000, // 10 seconds
          iterations: Infinity
        });
        cdThumbAnimate.pause();
    
        // Xử lý phóng to / thu nhỏ CD
        // Handles CD enlargement / reduction
        document.onscroll = function () {
          const scrollTop = window.scrollY || document.documentElement.scrollTop;
          const newCdWidth = cdWidth - scrollTop;
    
          cd.style.width = newCdWidth > 0 ? newCdWidth + "px" : 0;
          cd.style.opacity = newCdWidth / cdWidth;
        };
    
        // Xử lý khi click play
        // Handle when click play
        playBtn.onclick = function () {
          if (_this.isPlaying) {
            audio.pause();
          } else {
            audio.play();
          }
        };
    
        // Khi song được play
        // When the song is played
        audio.onplay = function () {
          _this.isPlaying = true;
          player.classList.add("playing");
          cdThumbAnimate.play();
        };
    
        // Khi song bị pause
        // When the song is pause
        audio.onpause = function () {
          _this.isPlaying = false;
          player.classList.remove("playing");
          cdThumbAnimate.pause();
        };
    
        // Khi tiến độ bài hát thay đổi
        // When the song progress changes
        audio.ontimeupdate = function () {
          if (audio.duration) {
            const progressPercent = Math.floor(
              (audio.currentTime / audio.duration) * 100
            );
            progress.value = progressPercent;
          }
        };
    
        // Xử lý khi tua song
        // Handling when seek
        progress.oninput= function (e) {
          const seekTime = (audio.duration / 100) * e.target.value;
          audio.currentTime = seekTime;
        };
    
        // Khi next song
        // When next song
        nextBtn.onclick = function () {
          if (_this.isRandom) {
            _this.playRandomSong();
          } else {
            _this.nextSong();
          }
          audio.play();
          _this.render();
          _this.scrollToActiveSong();
        };
    
        // Khi prev song
        // When prev song
        prevBtn.onclick = function () {
          if (_this.isRandom) {
            _this.playRandomSong();
          } else {
            _this.prevSong();
          }
          audio.play();
          _this.render();
          _this.scrollToActiveSong();
        };
    
        // Xử lý bật / tắt random song
        // Handling on / off random song
        randomBtn.onclick = function (e) {
          _this.isRandom = !_this.isRandom;
          _this.setConfig("isRandom", _this.isRandom);
          randomBtn.classList.toggle("active", _this.isRandom);
        };
    
        // Xử lý lặp lại một song
        // Single-parallel repeat processing
        repeatBtn.onclick = function (e) {
          _this.isRepeat = !_this.isRepeat;
          _this.setConfig("isRepeat", _this.isRepeat);
          repeatBtn.classList.toggle("active", _this.isRepeat);
        };
    
        // Xử lý next song khi audio ended
        // Handle next song when audio ended
        audio.onended = function () {
          if (_this.isRepeat) {
            audio.play();
          } else {
            nextBtn.click();
          }
        };
    
        // Lắng nghe hành vi click vào playlist
        // Listen to playlist clicks
        playlist.onclick = function (e) {
          const songNode = e.target.closest(".song:not(.active)");
    
          if (songNode || e.target.closest(".option")) {
            // Xử lý khi click vào song
            // Handle when clicking on the song
            if (songNode) {
              _this.currentIndex = Number(songNode.dataset.index);
              _this.loadCurrentSong();
              _this.render();
              audio.play();
            }
    
            // Xử lý khi click vào song option
            // Handle when clicking on the song option
            if (e.target.closest(".option")) {
            }
          }
        };
      },
      scrollToActiveSong: function () {
        setTimeout(() => {
          $(".song.active").scrollIntoView({
            behavior: "smooth",
            block: "nearest"
          });
        }, 300);
      },
      loadCurrentSong: function () {
        heading.textContent = this.currentSong.name;
        cdThumb.style.backgroundImage = `url('${this.currentSong.image}')`;
        audio.src = this.currentSong.path;
      },
      loadConfig: function () {
        this.isRandom = this.config.isRandom;
        this.isRepeat = this.config.isRepeat;
      },
      nextSong: function () {
        this.currentIndex++;
        if (this.currentIndex >= this.songs.length) {
          this.currentIndex = 0;
        }
        this.loadCurrentSong();
      },
      prevSong: function () {
        this.currentIndex--;
        if (this.currentIndex < 0) {
          this.currentIndex = this.songs.length - 1;
        }
        this.loadCurrentSong();
      },
      playRandomSong: function () {
        let newIndex;
        do {
          newIndex = Math.floor(Math.random() * this.songs.length);
        } while (newIndex === this.currentIndex);
    
        this.currentIndex = newIndex;
        this.loadCurrentSong();
      },
      start: function () {
        // Gán cấu hình từ config vào ứng dụng
        // Assign configuration from config to application
        this.loadConfig();
    
        // Định nghĩa các thuộc tính cho object
        // Defines properties for the object
        this.defineProperties();
    
        // Lắng nghe / xử lý các sự kiện (DOM events)
        // Listening / handling events (DOM events)
        this.handleEvents();
    
        // Tải thông tin bài hát đầu tiên vào UI khi chạy ứng dụng
        // Load the first song information into the UI when running the app
        this.loadCurrentSong();
    
        // Render playlist
        this.render();
    
        // Hiển thị trạng thái ban đầu của button repeat & random
        // Display the initial state of the repeat & random button
        randomBtn.classList.toggle("active", this.isRandom);
        repeatBtn.classList.toggle("active", this.isRepeat);
      }
    };
    
    app.start();
    