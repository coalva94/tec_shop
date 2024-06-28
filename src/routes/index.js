import {Router} from 'express'
const router = Router();

router.get('/', (req, res) => res.render('index', {title: 'TecShop | Home'}));
router.get('/products', (req, res) => res.render('products', {title: 'products'}));
router.get('/services', (req, res) => res.render('services', {title: 'services'}));
router.get('/about', (req, res) => res.render('about', {title: 'About me'}));
export default router;
