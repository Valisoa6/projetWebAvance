# projetWebAvabcé

Projet Full-Stack avec **Laravel 9**, **React 18**, **Vite** et **Seeders** pour la base de données.

Ce projet combine **Laravel** (backend PHP) et **React** (frontend JavaScript) avec **Vite** comme bundler. Il utilise également les **seeders Laravel** pour injecter automatiquement des données dans la base.

---

## 🧰 Stack technique

- **Laravel 9**
- **React 18**
- **Vite**
- **MySQL** 
- **Eloquent ORM**
- **Seeders Laravel**

---

## ⚙️ Prérequis

- PHP >= 8.0
- Composer
- Node.js >= 16
- npm
- Serveur MySQL

---

## 🚀 Cloner et démarrer le projet

```bash
# Cloner le dépôt
git clone https://github.com/Valisoa6/projetWebAvance.git

# Se déplacer dans le dossier du projet
cd backEnd
cd commerce

# Installer les dépendances PHP (Laravel)
composer install

# Copier le fichier .env et générer la clé
cp .env.example .env
php artisan key:generate

# Configurer la base de données dans .env
# (voir section suivante)

# Installer les dépendances JavaScript (React + Vite)
npm install

# Lancer les migrations et seeders
php artisan migrate --seed
or php artisan migrate:fresh --seed

# Démarrer Laravel
php artisan serve

# Démarrer Vite (React)
npm run dev
