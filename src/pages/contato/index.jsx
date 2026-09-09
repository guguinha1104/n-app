import './index.scss';
import { Link } from 'react-router-dom';


export default function Contato(){
    return(
<div className='contato'>
    <h1>CONTATO</h1>
    <p>entre em contato</p>
    <img src='https://www.google.com/imgres?q=palmeiras&imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F6%2F60%2FSE_Palmeiras_2025_crest.png%2F250px-SE_Palmeiras_2025_crest.png%3Futm_source%3Dpt.wikipedia.org%26utm_campaign%3Dparser%26utm_content%3Dthumbnail&imgrefurl=https%3A%2F%2Fpt.wikipedia.org%2Fwiki%2FSociedade_Esportiva_Palmeiras&docid=owlgzathExV6sM&tbnid=46HcYDMPPFwxkM&vet=12ahUKEwjgzJ_KpMGWAxUlhJUCHZPLJm8QnPAOegQILRAA..i&w=250&h=292&hcb=2&ved=2ahUKEwjgzJ_KpMGWAxUlhJUCHZPLJm8QnPAOegQILRAA' alt='nada' />
    <Link to = '/' > <p>home</p></Link>
</div>
    )
}