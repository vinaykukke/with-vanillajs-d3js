const express = require('express');
const path = require('path');

const router = express.Router();

router.get('/styles.css', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', '..', 'client', 'styles', 'styles.css'));
});

router.get('/revenue', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', '..', '..', 'assets', 'revenue.json'));
});

router.get('/visits', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', '..', '..', 'assets', 'visits.json'));
});

router.get('/impresions', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', '..', '..', 'assets', 'impressions.json'));
});

router.get('/client.bundle.js', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', '..', '..', 'dist', 'client.bundle.js'));
});

router.get('/*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', '..', 'views', 'index.html'));
});

module.exports = router;