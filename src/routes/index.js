import {Router} from 'express'
const router = Router();

router.get('/', (req, res) => res.render('index', {title: 'TecShop | Home'}));
router.get('/about', (req, res) => res.render('about', {title: 'About me'}));
router.get('/products', (req, res) => res.render('products', {title: 'products'}));
export default router;
