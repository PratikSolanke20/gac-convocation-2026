/**
 * GAC DHARASHIV CONVOCATION 2026 - BRIGHT THEME MASTER SCRIPT
 * Government Ayurvedic College & Hospital, Dharashiv
 * Graduation Ceremony of Batch 2020-21 (22 October 2026)
 * Dean: Dr. Veena Patil | Developed by Pratik Solanke
 */

document.addEventListener('DOMContentLoaded', () => {

  // ========================================================
  // 1. DATA: 55 GRADUATING DOCTORS ROSTER
  // ========================================================
  const GRADUATES_RAW = [
    "Priyanka Chandrashekhar Nikure",
    "Rohit Arun Gabhud",
    "Aftab Ansar Shaikh",
    "Himanshu Adesh Bodele",
    "Sanjay jayantilal pawara",
    "Tanushri Hemant Musale",
    "Shraddha Ashok Suradkar",
    "Dipak Uttamrao Gadekar",
    "GIRDHAR SINGH",
    "Megharani Bhimrao Gangarde",
    "Madhura Chandrakant Rathi",
    "Devendra Kumar Prajapat",
    "Sanket Sunil Waghmare",
    "Shruti Sunil Funne",
    "Rupali Chandrakant Patil",
    "Prajakta Satishkumar Sakhare",
    "Tejas Ramashankar Navgire",
    "Sadaf fatema syed manzoor patel",
    "Pooja Sundarrao Bobade",
    "Rajani Siddhappa Tadekar",
    "Srushti Vivek Patel",
    "Bhagyashree Ramachandra Shinde",
    "Vaishnavi Vaibhav Sathe",
    "Rohit Rajesh Sangale",
    "Arshiya Firdos Rasheed Ahmad Shaikh",
    "Bhairu Singh",
    "Sonune Hrutuja Shivaji",
    "Surajkumar anil sonawane",
    "Kale Bhagyashri Angad",
    "Mayuri Mohan Pawar",
    "Mangesh Madhukar Bharti",
    "Neha Shivaji Kudale",
    "Hrutik Rajendra Marode",
    "Abhishek Nitin Mahamune",
    "SAMIKSHA SHESHRAO UPARE",
    "Samruddhi Sanjay Ambure",
    "Prasad Shivanand Kumbhar",
    "S LAVANYA RAO",
    "Jyoti Vijay patil",
    "Rutuja Vilas Bhosale",
    "Kalyan Vilas kolekar",
    "Garad Rutuja Venkatrao",
    "Pratiksha Prakash Deshmukh",
    "Risha Uday wadwale",
    "GOPAL KESHAVRAO PHUPATE",
    "Pavan goroba kshirsagar",
    "Ajitkumar Rajaram Jadhav",
    "Madrewar Rutuja Rohidas",
    "KAKDE DNYANESHWARI MAROTRAO",
    "Shubham Ansaji Londhe",
    "HARSHADA PANDIT MOHOD.",
    "Phoola Kumari Meena",
    "Shikha samariya",
    "Terkar Ankita Dhanaji",
    "Rupesh Tandekar"
  ];

  function toTitleCase(str) {
    return str
      .replace(/[.]/g, '')
      .toLowerCase()
      .split(' ')
      .filter(w => w.length > 0)
      .map(w => w.charAt(0).toUpperCase() + w.slice(1))
      .join(' ');
  }

  const GRADUATES = GRADUATES_RAW.map((name, index) => ({
    id: index + 1,
    roll: `GAC-B20-${String(index + 1).padStart(2, '0')}`,
    name: toTitleCase(name),
    degree: "B.A.M.S. (Ayurvedacharya)",
    cheers: Math.floor(Math.random() * 20) + 30
  }));

  // ========================================================
  // 2. DOM REFERENCES
  // ========================================================
  const sparksContainer = document.getElementById('sparks-container');
  const petalsContainer = document.getElementById('petals-container');
  
  // Celebration Buttons
  const heroCapTossBtn = document.getElementById('hero-cap-toss-btn');
  const tossCapActionBtn = document.getElementById('toss-cap-action-btn');
  const dockCapBtn = document.getElementById('dock-cap-btn');
  const tossCountDisplay = document.getElementById('toss-count-display');

  // Search & Graduates
  const studentSearchInput = document.getElementById('student-search-input');
  const clearSearchBtn = document.getElementById('clear-search-btn');
  const graduatesGrid = document.getElementById('graduates-grid');
  const studentsCounterBadge = document.getElementById('students-counter-badge');

  // Campus photo switcher
  const campusPhotoDisplay = document.getElementById('campus-photo-display');
  const switchPhotoBtns = document.querySelectorAll('.switch-photo-btn');

  // Lightbox Modal
  const lightboxModal = document.getElementById('lightbox-modal');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxCaption = document.getElementById('lightbox-caption');
  const lightboxDlBtn = document.getElementById('lightbox-dl-btn');
  const lightboxCloseBtn = document.getElementById('lightbox-close-btn');
  const lightboxPrevBtn = document.getElementById('lightbox-prev-btn');
  const lightboxNextBtn = document.getElementById('lightbox-next-btn');

  // Sharing & Calendar
  const whatsappShareBtn = document.getElementById('whatsapp-share-btn');
  const copyLinkBtn = document.getElementById('copy-link-btn');
  const copyBtnText = document.getElementById('copy-btn-text');
  const nativeShareBtn = document.getElementById('native-share-btn');
  const googleCalBtn = document.getElementById('google-cal-btn');
  const downloadIcsBtn = document.getElementById('download-ics-btn');
  const toast = document.getElementById('toast');

  // Gallery Controls
  const filterPills = document.querySelectorAll('.filter-pill');
  const memoryCards = document.querySelectorAll('.memory-card');
  const toggleSlideshowBtn = document.getElementById('toggle-slideshow-btn');
  const slideshowBtnText = document.getElementById('slideshow-btn-text');

  // Wishes Form
  const wishForm = document.getElementById('wish-form');
  const wishesFeed = document.getElementById('wishes-feed');

  // Navigation Links
  const navLinks = document.querySelectorAll('.nav-item-link');

  let currentPhotoIndex = 0;
  let slideshowInterval = null;
  let capTossCount = 428;

  // Gallery items for lightbox
  const galleryItems = [
    {
      src: "assets/gallery/batch-photo-1.jpg",
      caption: "Class of 2020 - United in Purpose, Bonded for Life (Complete Batch Portrait)"
    },
    {
      src: "assets/gallery/batch-photo-2.jpg",
      caption: "From Hospital Rounds to Comrades - Clinical Postings & Hands-On Patient Care"
    },
    {
      src: "assets/gallery/batch-photo-3.jpg",
      caption: "Smiles, Celebrations & Festivities - Cultural Spirit & Joyous Campus Days"
    },
    {
      src: "assets/gallery/batch-photo-4.jpg",
      caption: "The Final Milestone Ahead - Graduating as Ayurvedic Healers & Doctors"
    }
  ];

  // ========================================================
  // 3. GRADUATION CAP TOSS & CELEBRATION PHYSICS
  // ========================================================
  function triggerGraduationCapToss(count = 45) {
    const showerContainer = document.createElement('div');
    showerContainer.style.position = 'fixed';
    showerContainer.style.inset = '0';
    showerContainer.style.pointerEvents = 'none';
    showerContainer.style.zIndex = '9999';
    showerContainer.style.overflow = 'hidden';
    document.body.appendChild(showerContainer);

    const icons = ['🎓', '📜', '✨', '🌿', '🎉', '🌟'];

    for (let i = 0; i < count; i++) {
      const el = document.createElement('span');
      const isCap = Math.random() < 0.5;
      el.textContent = isCap ? '🎓' : icons[Math.floor(Math.random() * icons.length)];
      
      el.style.position = 'absolute';
      el.style.left = `${Math.random() * 96 + 2}%`;
      el.style.bottom = '-40px';
      el.style.fontSize = isCap ? `${Math.random() * 18 + 26}px` : `${Math.random() * 16 + 18}px`;
      el.style.opacity = '1';
      el.style.filter = 'drop-shadow(0 3px 8px rgba(0,0,0,0.2))';

      const peakHeight = Math.random() * (window.innerHeight * 0.65) + (window.innerHeight * 0.25);
      const horizontalDrift = (Math.random() - 0.5) * 200;
      const duration = Math.random() * 1.5 + 2.4;

      el.style.transition = `transform ${duration}s cubic-bezier(0.18, 0.9, 0.32, 1), opacity ${duration * 0.4}s ease-in ${duration * 0.6}s`;
      showerContainer.appendChild(el);

      setTimeout(() => {
        const rotate = (Math.random() - 0.5) * 720;
        el.style.transform = `translate(${horizontalDrift}px, -${peakHeight}px) rotate(${rotate}deg)`;
      }, 20);

      setTimeout(() => {
        el.style.transition = `transform ${duration * 1.2}s cubic-bezier(0.5, 0, 0.75, 0), opacity 0.8s ease-in`;
        el.style.transform = `translate(${horizontalDrift * 1.4}px, 100px) rotate(${Math.random() * 1080}deg)`;
        el.style.opacity = '0';
      }, duration * 1000 * 0.6);
    }

    setTimeout(() => {
      showerContainer.remove();
    }, 5500);

    capTossCount++;
    if (tossCountDisplay) {
      tossCountDisplay.textContent = capTossCount;
    }
  }

  // ========================================================
  // CELEBRATION FANFARE & CHIMES SOUND SYNTHESIZER
  // ========================================================
  let audioCtx = null;

  function playCelebrationFanfare() {
    try {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      if (!AudioContextClass) return;
      if (!audioCtx) {
        audioCtx = new AudioContextClass();
      }
      if (audioCtx.state === 'suspended') {
        audioCtx.resume();
      }

      const now = audioCtx.currentTime;

      // 1. Celebratory Glockenspiel / Golden Chimes (Sparkling Arpeggio)
      const chimeNotes = [
        { f: 523.25, t: 0.00, d: 0.45 }, // C5
        { f: 659.25, t: 0.08, d: 0.45 }, // E5
        { f: 783.99, t: 0.16, d: 0.50 }, // G5
        { f: 1046.50, t: 0.24, d: 0.65 }, // C6
        { f: 1318.51, t: 0.32, d: 0.90 }  // E6
      ];

      chimeNotes.forEach(ch => {
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(ch.f, now + ch.t);

        gain.gain.setValueAtTime(0, now + ch.t);
        gain.gain.linearRampToValueAtTime(0.24, now + ch.t + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.001, now + ch.t + ch.d);

        osc.connect(gain);
        gain.connect(audioCtx.destination);

        osc.start(now + ch.t);
        osc.stop(now + ch.t + ch.d);
      });

      // 2. Triumphant Warm Brass / Organ Fanfare Chord
      const chord = [311.13, 392.00, 466.16, 622.25]; // Eb Major
      chord.forEach(freq => {
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();

        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, now + 0.26);

        gain.gain.setValueAtTime(0, now + 0.26);
        gain.gain.linearRampToValueAtTime(0.12, now + 0.32);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 1.55);

        osc.connect(gain);
        gain.connect(audioCtx.destination);

        osc.start(now + 0.26);
        osc.stop(now + 1.6);
      });

      // 3. Celebratory Party Pop Transient
      const popOsc = audioCtx.createOscillator();
      const popGain = audioCtx.createGain();
      popOsc.type = 'sine';
      popOsc.frequency.setValueAtTime(160, now);
      popOsc.frequency.exponentialRampToValueAtTime(40, now + 0.12);

      popGain.gain.setValueAtTime(0.25, now);
      popGain.gain.exponentialRampToValueAtTime(0.001, now + 0.12);

      popOsc.connect(popGain);
      popGain.connect(audioCtx.destination);

      popOsc.start(now);
      popOsc.stop(now + 0.13);

    } catch (err) {
      console.warn('Audio playback not supported or blocked:', err);
    }
  }

  function handleCapTossAction() {
    playCelebrationFanfare();
    triggerGraduationCapToss(50);
    showToast('🎓 Graduation Cap Tossed! Celebrating Batch 2020!');
  }

  if (heroCapTossBtn) heroCapTossBtn.addEventListener('click', handleCapTossAction);
  if (tossCapActionBtn) tossCapActionBtn.addEventListener('click', handleCapTossAction);
  if (dockCapBtn) dockCapBtn.addEventListener('click', handleCapTossAction);

  // ========================================================
  // 4. LIVE COUNTDOWN TIMER (22 October 2026, 10:00 AM IST)
  // ========================================================
  const targetDate = new Date('2026-10-22T10:00:00+05:30').getTime();

  const elDays = document.getElementById('timer-days');
  const elHours = document.getElementById('timer-hours');
  const elMinutes = document.getElementById('timer-minutes');
  const elSeconds = document.getElementById('timer-seconds');
  const progressBar = document.getElementById('countdown-progress-bar');
  const progressText = document.getElementById('progress-percent-text');

  const batchStartDate = new Date('2020-12-01T00:00:00+05:30').getTime();
  const totalJourneyTime = targetDate - batchStartDate;

  function updateCountdown() {
    const now = new Date().getTime();
    const diff = targetDate - now;

    if (diff <= 0) {
      if (elDays) elDays.textContent = '00';
      if (elHours) elHours.textContent = '00';
      if (elMinutes) elMinutes.textContent = '00';
      if (elSeconds) elSeconds.textContent = '00';
      if (progressBar) progressBar.style.width = '100%';
      if (progressText) progressText.textContent = 'Convocation Day is here!';
      return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    if (elDays) elDays.textContent = String(days).padStart(2, '0');
    if (elHours) elHours.textContent = String(hours).padStart(2, '0');
    if (elMinutes) elMinutes.textContent = String(minutes).padStart(2, '0');
    if (elSeconds) elSeconds.textContent = String(seconds).padStart(2, '0');

    const elapsed = now - batchStartDate;
    const pct = Math.min(Math.max((elapsed / totalJourneyTime) * 100, 0), 100).toFixed(1);
    if (progressBar) progressBar.style.width = `${pct}%`;
    if (progressText) progressText.textContent = `${pct}% of 5.5-Year Journey Completed`;
  }

  updateCountdown();
  setInterval(updateCountdown, 1000);

  // ========================================================
  // 5. 55 GRADUATING DOCTORS ROSTER & SEARCH
  // ========================================================
  function renderGraduates(list) {
    if (!graduatesGrid) return;
    graduatesGrid.innerHTML = '';

    if (list.length === 0) {
      graduatesGrid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 36px 20px; color: var(--text-muted);">
          <p style="font-size: 1.8rem; margin-bottom: 8px;">🔍</p>
          <p style="font-family: var(--font-royal); font-size: 1.1rem; color: var(--gold-deep); font-weight: 700;">No Doctor Found</p>
          <p style="font-size: 0.85rem;">Try searching by another name or roll code.</p>
        </div>
      `;
      if (studentsCounterBadge) studentsCounterBadge.textContent = '0 Doctors Found';
      return;
    }

    list.forEach(doc => {
      const card = document.createElement('article');
      card.className = 'doctor-card bright-card gold-border-frame';
      card.setAttribute('data-id', doc.id);

      card.innerHTML = `
        <div class="doctor-crest-badge" title="Doctor of Ayurvedic Medicine">
          <span>🩺</span>
        </div>
        <div class="doctor-details">
          <span class="doctor-roll">${doc.roll}</span>
          <h3 class="doctor-name" title="Dr. ${doc.name}">Dr. ${doc.name}</h3>
          <span class="doctor-title-tag">B.A.M.S. · Class of 2020</span>
        </div>
        <button class="doctor-cheer-btn" data-id="${doc.id}" title="Cheer for Dr. ${doc.name}" aria-label="Cheer for Dr. ${doc.name}">
          <span>👏</span>
        </button>
      `;

      graduatesGrid.appendChild(card);
    });

    if (studentsCounterBadge) {
      studentsCounterBadge.textContent = `Showing ${list.length} of 55 Doctors`;
    }

    const cheerBtns = graduatesGrid.querySelectorAll('.doctor-cheer-btn');
    cheerBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-id');
        const doc = GRADUATES.find(d => d.id === parseInt(id, 10));
        if (doc) {
          triggerGraduationCapToss(15);
          showToast(`👏 Cheered for Dr. ${doc.name}!`);
          btn.innerHTML = '❤️';
          setTimeout(() => { btn.innerHTML = '👏'; }, 1800);
        }
      });
    });
  }

  renderGraduates(GRADUATES);

  if (studentSearchInput) {
    studentSearchInput.addEventListener('input', (e) => {
      const query = e.target.value.trim().toLowerCase();
      if (clearSearchBtn) {
        clearSearchBtn.style.display = query.length > 0 ? 'block' : 'none';
      }

      const filtered = GRADUATES.filter(doc => 
        doc.name.toLowerCase().includes(query) || doc.roll.toLowerCase().includes(query)
      );
      renderGraduates(filtered);
    });
  }

  if (clearSearchBtn) {
    clearSearchBtn.addEventListener('click', () => {
      studentSearchInput.value = '';
      clearSearchBtn.style.display = 'none';
      renderGraduates(GRADUATES);
      studentSearchInput.focus();
    });
  }

  // ========================================================
  // 6. CAMPUS GATE PHOTO SWITCHER (NO CLIPPING)
  // ========================================================
  switchPhotoBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      switchPhotoBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const targetImg = btn.getAttribute('data-img');
      if (campusPhotoDisplay && targetImg) {
        campusPhotoDisplay.style.opacity = '0';
        setTimeout(() => {
          campusPhotoDisplay.src = targetImg;
          campusPhotoDisplay.style.opacity = '1';
        }, 180);
      }
    });
  });

  // ========================================================
  // 7. BATCH MEMORIES GALLERY & LIGHTBOX
  // ========================================================
  function openLightbox(index) {
    currentPhotoIndex = index;
    const item = galleryItems[currentPhotoIndex];
    if (lightboxImg && lightboxCaption && lightboxDlBtn) {
      lightboxImg.src = item.src;
      lightboxCaption.textContent = item.caption;
      lightboxDlBtn.href = item.src;
      lightboxDlBtn.download = `GAC-Dharashiv-Batch2020-Photo${index + 1}.jpg`;
    }
    lightboxModal.classList.add('active');
    lightboxModal.setAttribute('aria-hidden', 'false');
  }

  function closeLightbox() {
    lightboxModal.classList.remove('active');
    lightboxModal.setAttribute('aria-hidden', 'true');
    stopSlideshow();
  }

  const zoomBtns = document.querySelectorAll('.zoom-btn');
  zoomBtns.forEach((btn, idx) => {
    btn.addEventListener('click', () => openLightbox(idx));
  });

  if (lightboxCloseBtn) lightboxCloseBtn.addEventListener('click', closeLightbox);
  
  if (lightboxPrevBtn) {
    lightboxPrevBtn.addEventListener('click', () => {
      currentPhotoIndex = (currentPhotoIndex - 1 + galleryItems.length) % galleryItems.length;
      openLightbox(currentPhotoIndex);
    });
  }

  if (lightboxNextBtn) {
    lightboxNextBtn.addEventListener('click', () => {
      currentPhotoIndex = (currentPhotoIndex + 1) % galleryItems.length;
      openLightbox(currentPhotoIndex);
    });
  }

  filterPills.forEach(pill => {
    pill.addEventListener('click', () => {
      filterPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      const cat = pill.getAttribute('data-filter');

      memoryCards.forEach(card => {
        const itemCat = card.getAttribute('data-category');
        if (cat === 'all' || itemCat === cat) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  function startSlideshow() {
    slideshowInterval = setInterval(() => {
      currentPhotoIndex = (currentPhotoIndex + 1) % galleryItems.length;
      openLightbox(currentPhotoIndex);
    }, 3800);
    if (slideshowBtnText) slideshowBtnText.textContent = 'Pause Slideshow';
    if (toggleSlideshowBtn) toggleSlideshowBtn.classList.add('active');
  }

  function stopSlideshow() {
    if (slideshowInterval) {
      clearInterval(slideshowInterval);
      slideshowInterval = null;
    }
    if (slideshowBtnText) slideshowBtnText.textContent = 'Start Slideshow';
    if (toggleSlideshowBtn) toggleSlideshowBtn.classList.remove('active');
  }

  if (toggleSlideshowBtn) {
    toggleSlideshowBtn.addEventListener('click', () => {
      if (slideshowInterval) {
        stopSlideshow();
      } else {
        openLightbox(currentPhotoIndex);
        startSlideshow();
      }
    });
  }

  const likeBtns = document.querySelectorAll('.like-btn');
  likeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const countSpan = btn.querySelector('.like-count');
      let count = parseInt(countSpan.textContent, 10);
      if (!btn.classList.contains('liked')) {
        btn.classList.add('liked');
        countSpan.textContent = count + 1;
        showToast('❤️ Photo cheered!');
      } else {
        btn.classList.remove('liked');
        countSpan.textContent = count - 1;
      }
    });
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (lightboxModal && lightboxModal.classList.contains('active')) closeLightbox();
    }
  });

  // ========================================================
  // 8. WISHES / GUESTBOOK WALL (ONLY USER ENTERED MESSAGES)
  // ========================================================
  function loadWishes() {
    let savedWishes = [];
    try {
      savedWishes = JSON.parse(localStorage.getItem('gac_convocation_wishes')) || [];
    } catch (e) {
      savedWishes = [];
    }

    if (!wishesFeed) return;
    wishesFeed.innerHTML = '';

    if (savedWishes.length === 0) {
      wishesFeed.innerHTML = `
        <div class="empty-wishes-placeholder">
          <div class="empty-icon">✍️</div>
          <p><strong>Be the first to share congratulations!</strong></p>
          <p>Post your blessing or encouraging words for the 55 graduating doctors above.</p>
        </div>
      `;
      return;
    }

    savedWishes.forEach(item => {
      const card = document.createElement('div');
      card.className = 'wish-item-card bright-card gold-border-frame';
      card.innerHTML = `
        <div class="wish-item-header">
          <h4 class="wish-author-name">${item.author}</h4>
          <span class="wish-relation-badge">${item.relation}</span>
        </div>
        <p class="wish-item-text">"${item.text}"</p>
        <span class="wish-time">🕒 ${item.time}</span>
      `;
      wishesFeed.appendChild(card);
    });
  }

  loadWishes();

  if (wishForm) {
    wishForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const author = document.getElementById('wish-author').value.trim();
      const relation = document.getElementById('wish-relation').value;
      const text = document.getElementById('wish-message').value.trim();

      if (!author || !text) return;

      const dateStr = new Date().toLocaleDateString('en-IN', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      });

      const newWish = {
        author,
        relation,
        text,
        time: dateStr
      };

      let saved = [];
      try {
        saved = JSON.parse(localStorage.getItem('gac_convocation_wishes')) || [];
      } catch (err) {
        saved = [];
      }
      saved.unshift(newWish);
      localStorage.setItem('gac_convocation_wishes', JSON.stringify(saved));

      loadWishes();
      wishForm.reset();
      triggerGraduationCapToss(30);
      showToast('✍️ Your congratulatory message was posted!');
    });
  }

  // ========================================================
  // 9. SHARING & CALENDAR INTEGRATIONS
  // ========================================================
  const pageUrl = window.location.href;
  const invitationShareText = `🎓 *Official Invitation: Graduation Ceremony 2026*\n🏛️ *Government Ayurvedic College & Hospital, Dharashiv*\n\nYou are cordially invited by Dean Dr. Veena Patil and the faculty to celebrate the Convocation Ceremony of BAMS Batch 2020 on:\n📅 *Thursday, 22 October 2026 at 10:00 AM*\n📍 *Siddhai Garden, Beed Bypass Road, NH52, Dharashiv*\n\nExplore the official website with batch memories, 55 doctors roll & venue directions:\n${pageUrl}`;

  if (whatsappShareBtn) {
    whatsappShareBtn.addEventListener('click', () => {
      const url = `https://api.whatsapp.com/send?text=${encodeURIComponent(invitationShareText)}`;
      window.open(url, '_blank');
    });
  }

  if (copyLinkBtn) {
    copyLinkBtn.addEventListener('click', () => {
      navigator.clipboard.writeText(pageUrl)
        .then(() => {
          showToast('📋 Invitation link copied to clipboard!');
          if (copyBtnText) copyBtnText.textContent = 'Link Copied!';
          setTimeout(() => {
            if (copyBtnText) copyBtnText.textContent = 'Copy Invitation Link';
          }, 2500);
        })
        .catch(() => {
          showToast('Could not copy automatically. Link: ' + pageUrl);
        });
    });
  }

  if (nativeShareBtn) {
    nativeShareBtn.addEventListener('click', () => {
      if (navigator.share) {
        navigator.share({
          title: "Graduation Ceremony 2026 | GAC Dharashiv",
          text: "Official Invitation to the Convocation Ceremony of Batch 2020 at GAC Dharashiv.",
          url: pageUrl
        }).catch(() => {});
      } else {
        navigator.clipboard.writeText(pageUrl);
        showToast('📋 Link copied to clipboard!');
      }
    });
  }

  if (googleCalBtn) {
    const calTitle = encodeURIComponent("Graduation Ceremony Batch 2020 | GAC & Hospital, Dharashiv");
    const calDetails = encodeURIComponent("Graduation Ceremony of 55 young Ayurvedic Doctors of Batch 2020-21. Dean: Dr. Veena Patil. Venue: Siddhai Garden, Beed bypass road, NH52, Dharashiv.");
    const calLocation = encodeURIComponent("Siddhai Garden, Beed bypass road, NH52, Dharashiv, Maharashtra 413501");
    const calDates = "20261022T043000Z/20261022T093000Z";
    googleCalBtn.href = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${calTitle}&dates=${calDates}&details=${calDetails}&location=${calLocation}`;
  }

  if (downloadIcsBtn) {
    downloadIcsBtn.addEventListener('click', () => {
      const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//GAC Dharashiv//Convocation 2026//EN
BEGIN:VEVENT
UID:gac-convocation-2026@dharashiv.gov.in
DTSTAMP:20261021T000000Z
DTSTART:20261022T043000Z
DTEND:20261022T093000Z
SUMMARY:Graduation Ceremony Batch 2020 - GAC Dharashiv
DESCRIPTION:Graduation Ceremony of Batch 2020-21 at Government Ayurvedic College & Hospital, Dharashiv. Dean: Dr. Veena Patil. Celebrating 55 young doctors stepping into the noble profession of healing.
LOCATION:Siddhai Garden, Beed bypass road, NH52, Dharashiv, Maharashtra
STATUS:CONFIRMED
END:VEVENT
END:VCALENDAR`;

      const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
      const link = document.createElement('a');
      link.href = window.URL.createObjectURL(blob);
      link.setAttribute('download', 'GAC-Dharashiv-Convocation-2026.ics');
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      showToast('📅 Calendar invite (.ics) downloaded!');
    });
  }

  // ========================================================
  // 10. AMBIENT PARTICLES
  // ========================================================
  function createSparks() {
    if (!sparksContainer) return;
    const count = window.innerWidth < 768 ? 12 : 22;

    for (let i = 0; i < count; i++) {
      const spark = document.createElement('span');
      spark.className = 'spark-particle';

      const size = Math.random() * 4 + 2;
      spark.style.width = `${size}px`;
      spark.style.height = `${size}px`;
      spark.style.left = `${Math.random() * 100}%`;
      spark.style.animationDuration = `${Math.random() * 7 + 8}s`;
      spark.style.animationDelay = `${Math.random() * 8}s`;

      sparksContainer.appendChild(spark);
    }
  }

  function createAmbientPetals() {
    if (!petalsContainer) return;
    const count = window.innerWidth < 768 ? 10 : 16;
    const types = ['leaf-sage', 'gold-confetti'];

    for (let i = 0; i < count; i++) {
      const petal = document.createElement('span');
      const type = types[Math.floor(Math.random() * types.length)];
      petal.className = `petal-particle ${type}`;

      petal.style.left = `${Math.random() * 100}%`;
      petal.style.animationDuration = `${Math.random() * 8 + 10}s`;
      petal.style.animationDelay = `${Math.random() * 9}s`;

      petalsContainer.appendChild(petal);
    }
  }

  createSparks();
  createAmbientPetals();

  // ========================================================
  // 11. TOAST NOTIFICATION UTILITY
  // ========================================================
  let toastTimer = null;
  function showToast(msg) {
    if (!toast) return;
    toast.textContent = msg;
    toast.classList.add('active');

    if (toastTimer) clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toast.classList.remove('active');
    }, 3000);
  }

  // ========================================================
  // 12. NAVIGATION SCROLL & TAB SWITCHING
  // ========================================================
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navLinks.forEach(l => l.classList.remove('active'));
      link.classList.add('active');
      link.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    });
  });

  const sections = document.querySelectorAll('section[id], header[id]');
  window.addEventListener('scroll', () => {
    let currentId = '';
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 120;
      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        currentId = section.getAttribute('id');
      }
    });

    if (currentId) {
      navLinks.forEach(link => {
        if (link.getAttribute('href') === `#${currentId}`) {
          if (!link.classList.contains('active')) {
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
          }
        }
      });
    }
  }, { passive: true });

});
