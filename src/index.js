import './styles/main.css';
import * as images from './images';

// Дані персонажів з ваших скріншотів
const characters = [
  // Перший файл (Glacio)
  { name: 'Lingyang', rarity: 5, role: 'DPS', image: images.lingyangImg, roleIcon: images.glacioImg, weaponIcon: images.gauntletsImg },
  { name: 'Zhezhi', rarity: 5, role: 'Support', image: images.zhezhiImg, roleIcon: images.glacioImg, weaponIcon: images.rectifierImg },
  { name: 'Carlotta', rarity: 5, role: 'Support', image: images.carlottaImg, roleIcon: images.glacioImg, weaponIcon: images.pistolsImg },
  { name: 'Encore', rarity: 5, role: 'DPS', image: images.encoreImg, roleIcon: images.fusionImg, weaponIcon: images.rectifierImg },
  { name: 'Changli', rarity: 5, role: 'DPS', image: images.changliImg, roleIcon: images.fusionImg, weaponIcon: images.swordImg },
  { name: 'Brant', rarity: 5, role: 'Support', image: images.brantImg, roleIcon: images.fusionImg, weaponIcon: images.swordImg },
  { name: 'Lupa', rarity: 5, role: 'Support', image: images.lupaImg, roleIcon: images.fusionImg, weaponIcon: images.broadbladeImg },
  { name: 'Galbrena', rarity: 5, role: 'Support', image: images.galbrenaImg, roleIcon: images.fusionImg, weaponIcon: images.pistolsImg },
  { name: 'Mornye', rarity: 5, role: 'DPS', image: images.mornyeImg, roleIcon: images.fusionImg, weaponIcon: images.broadbladeImg },
  { name: 'Calcharo', rarity: 5, role: 'DPS', image: images.calcharoImg, roleIcon: images.electroImg, weaponIcon: images.broadbladeImg },
  { name: 'Yinlin', rarity: 5, role: 'Support', image: images.yinlinImg, roleIcon: images.electroImg, weaponIcon: images.rectifierImg },
  { name: 'Jinhsi', rarity: 5, role: 'DPS', image: images.jinhsiImg, roleIcon: images.spectroImg, weaponIcon: images.broadbladeImg },

  // Другий файл
  { name: 'Roccia', rarity: 5, role: 'Support', image: images.rocciaImg, roleIcon: images.havocImg, weaponIcon: images.gauntletsImg },
  { name: 'Cantarella', rarity: 5, role: 'Support', image: images.cantarellaImg, roleIcon: images.havocImg, weaponIcon: images.rectifierImg },
  { name: 'Phrolova', rarity: 5, role: 'Support', image: images.phrolovaImg, roleIcon: images.havocImg, weaponIcon: images.rectifierImg },
  { name: 'Sanhua', rarity: 4, role: 'DPS', image: images.sanhuaImg, roleIcon: images.glacioImg, weaponIcon: images.swordImg },
  { name: 'Baizhi', rarity: 4, role: 'Support', image: images.baizhiImg, roleIcon: images.glacioImg, weaponIcon: images.rectifierImg },
  { name: 'Youhu', rarity: 4, role: 'DPS', image: images.youhuImg, roleIcon: images.glacioImg, weaponIcon: images.gauntletsImg },
  { name: 'Chixia', rarity: 4, role: 'DPS', image: images.chixiaImg, roleIcon: images.fusionImg, weaponIcon: images.pistolsImg },
  { name: 'Mortefi', rarity: 4, role: 'Support', image: images.mortefiImg, roleIcon: images.fusionImg, weaponIcon: images.pistolsImg },
  { name: 'Yuanwu', rarity: 4, role: 'Support', image: images.yuanwuImg, roleIcon: images.electroImg, weaponIcon: images.gauntletsImg },
  { name: 'Buling', rarity: 4, role: 'Support', image: images.bulingImg, roleIcon: images.electroImg, weaponIcon: images.rectifierImg },
  { name: 'Yangyang', rarity: 4, role: 'Support', image: images.yangyangImg, roleIcon: images.aeroImg, weaponIcon: images.swordImg },
  { name: 'Aalto', rarity: 4, role: 'DPS', image: images.aaltoImg, roleIcon: images.aeroImg, weaponIcon: images.pistolsImg },
  { name: 'Lumi', rarity: 4, role: 'Support', image: images.lumiImg, roleIcon: images.electroImg, weaponIcon: images.broadbladeImg },
  { name: 'Taoqi', rarity: 4, role: 'Support', image: images.taoqiImg, roleIcon: images.havocImg, weaponIcon: images.broadbladeImg },
  { name: 'Danjin', rarity: 4, role: 'DPS', image: images.danjinImg, roleIcon: images.havocImg, weaponIcon: images.swordImg },

  // Третій і четвертий файли
  { name: 'Xiangli Yao', rarity: 5, role: 'DPS', image: images.xiangliYaoImg, roleIcon: images.electroImg, weaponIcon: images.gauntletsImg },
  { name: 'Augusta', rarity: 5, role: 'Support', image: images.augustaImg, roleIcon: images.electroImg, weaponIcon: images.broadbladeImg },
  { name: 'Jiyan', rarity: 5, role: 'DPS', image: images.jiyanImg, roleIcon: images.aeroImg, weaponIcon: images.broadbladeImg },
  { name: 'Jianxin', rarity: 5, role: 'Support', image: images.jianxinImg, roleIcon: images.aeroImg, weaponIcon: images.gauntletsImg },
  { name: 'Rover:Aero', rarity: 5, role: 'DPS', image: images.roverAeroImg, roleIcon: images.aeroImg, weaponIcon: images.swordImg },
  { name: 'Ciaccona', rarity: 5, role: 'Support', image: images.ciacconaImg, roleIcon: images.aeroImg, weaponIcon: images.pistolsImg },
  { name: 'Cartethyia', rarity: 5, role: 'DPS', image: images.cartethyiaImg, roleIcon: images.aeroImg, weaponIcon: images.swordImg },
  { name: 'luno', rarity: 5, role: 'Support', image: images.iunoImg, roleIcon: images.aeroImg, weaponIcon: images.gauntletsImg },
  { name: 'Qiuyuan', rarity: 5, role: 'Support', image: images.qiuyuanImg, roleIcon: images.aeroImg, weaponIcon: images.swordImg },
  { name: 'Rover:Spectro', rarity: 5, role: 'DPS', image: images.roverSpectroImg, roleIcon: images.spectroImg, weaponIcon: images.swordImg },
  { name: 'Verina', rarity: 5, role: 'Support', image: images.verinaImg, roleIcon: images.spectroImg, weaponIcon: images.rectifierImg },
  { name: 'Shorekeeper', rarity: 5, role: 'Support', image: images.shorekeeperImg, roleIcon: images.spectroImg, weaponIcon: images.rectifierImg },
  { name: 'Phoebe', rarity: 5, role: 'DPS', image: images.phoebeImg, roleIcon: images.spectroImg, weaponIcon: images.rectifierImg },
  { name: 'Zani', rarity: 5, role: 'Support', image: images.zaniImg, roleIcon: images.spectroImg, weaponIcon: images.gauntletsImg },
  { name: 'Chisa', rarity: 5, role: 'Support', image: images.chisaImg, roleIcon: images.havocImg, weaponIcon: images.broadbladeImg },
  { name: 'Lynae', rarity: 5, role: 'DPS', image: images.lynaeImg, roleIcon: images.spectroImg, weaponIcon: images.pistolsImg },
  { name: 'Camellya', rarity: 5, role: 'Support', image: images.camellyaImg, roleIcon: images.havocImg, weaponIcon: images.swordImg },
  { name: 'Rover:Havoc', rarity: 5, role: 'DPS', image: images.roverHavocImg, roleIcon: images.havocImg, weaponIcon: images.swordImg }
];

class CharacterManager {
  constructor() {
    this.charactersGrid = document.getElementById('charactersGrid');
    this.filterButtons = document.querySelectorAll('.filter-btn');
    this.loader = document.getElementById('loader');
    this.currentFilter = 'all';
    this.init();
  }

  init() {
    this.renderCharacters();
    this.setupEventListeners();
    this.hideLoader();
  }

  renderCharacters(filter = 'all') {
    this.showLoader();
    this.charactersGrid.innerHTML = '';

    const sortedCharacters = [...characters].sort((a, b) => b.rarity - a.rarity);

    const filteredCharacters = filter === 'all' 
      ? sortedCharacters 
      : sortedCharacters.filter(char => {
        if (filter === '5-star') return char.rarity === 5;
        if (filter === '4-star') return char.rarity === 4;
        if (filter === 'support') return char.role === 'Support';
        if (filter === 'dps') return char.role === 'DPS';
        return true;
      });

    filteredCharacters.forEach(character => {
      const card = this.createCharacterCard(character);
      this.charactersGrid.appendChild(card);
    });

    setTimeout(() => this.hideLoader(), 500);
  }

  createCharacterCard(character) {
    const card = document.createElement('div');
    card.className = 'character-card';
    card.innerHTML = `
            <div class="card-badges">
                <div class="badge badge-role">
                    ${character.roleIcon ? `<img src="${character.roleIcon}" alt="element">` : `<i class="fas fa-${this.getRoleIcon(character.role)}"></i>`}
                </div>
                <div class="badge badge-rarity rarity-${character.rarity}">
                    ${character.weaponIcon ? `<img src="${character.weaponIcon}" alt="weapon">` : `${character.rarity}★`}
                </div>
            </div>
            <div class="character-image">
                ${character.image ? `<img src="${character.image}" alt="${character.name}" style="width: 100%; height: 100%; object-fit: cover;">` : '<i class="fas fa-user"></i>'}
            </div>
            <h3>${character.name}</h3>
            <p class="character-role">${character.role}</p>
        `;
        
    card.addEventListener('mouseenter', () => {
      const img = card.querySelector('.character-image img, .character-image i');
      img.style.transform = 'scale(1.1)';
      img.style.transition = 'transform 0.3s ease';
    });
        
    card.addEventListener('mouseleave', () => {
      const img = card.querySelector('.character-image img, .character-image i');
      img.style.transform = 'scale(1)';
    });

    return card;
  }

  getRoleIcon(role) {
    if (role === 'DPS') return 'fire';
    if (role === 'Support') return 'shield-alt';
    return 'user';
  }

  setupEventListeners() {
    this.filterButtons.forEach(button => {
      button.addEventListener('click', (e) => {
        this.filterButtons.forEach(btn => btn.classList.remove('active'));
        e.target.classList.add('active');
        const filter = e.target.textContent.toLowerCase();
        this.renderCharacters(filter);
      });
    });

    const searchInput = document.querySelector('.search-box input');
    searchInput.addEventListener('input', (e) => {
      const searchTerm = e.target.value.toLowerCase();
      this.filterCharacters(searchTerm);
    });
  }

  filterCharacters(searchTerm) {
    const allCards = document.querySelectorAll('.character-card');
        
    allCards.forEach(card => {
      const name = card.querySelector('h3').textContent.toLowerCase();
      if (name.includes(searchTerm)) {
        card.style.display = 'block';
        card.style.animation = 'fadeIn 0.5s ease';
      } else {
        card.style.display = 'none';
      }
    });
  }

  showLoader() {
    this.loader.classList.add('active');
  }

  hideLoader() {
    this.loader.classList.remove('active');
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new CharacterManager();
    
  // Установка логотипа
  const headerLogoImg = document.querySelector('.logo img');
  if (headerLogoImg && images.logoImg) {
    headerLogoImg.src = images.logoImg;
  }
    
  const style = document.createElement('style');
  style.textContent = `
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }
    `;
  document.head.appendChild(style);
});

if (module.hot) {
  module.hot.accept();
}
