import './style.scss'

import { getPhoto } from './modules/unsplash';

console.log(await getPhoto());

document.querySelector('#app').innerHTML = `
  <main>
    <div class="flex-container">
        <div class="flex-row flex-row--reverse">
            <div class="flex-col--12 flex-col--5">
                <div class="image-box"></div>
            </div>
            <div class="flex-col--12 flex-col--7">
                <div class="text-box">
                    <div class="text-box__title">
                        <h2>Lorem ipsum dolor sit amet</h2>
                    </div>
                    <div class="text-box__text">
                        <p>consectetur adipiscing elit. Vivamus quis rhoncus eros, non dictum mi. Vivamus vel ex dapibus, egestas tortor eget, blandit mauris. Sed ullamcorper urna tristique dolor dignissim maximus. Integer id cursus urna, at molestie elit. Proin vel massa vitae ex scelerisque blandit. Quisque sed lectus nec nulla euismod consectetur in vel diam.</p>
                        
                        <p>In hac habitasse platea dictumst. Sed sit amet dui aliquam, pharetra velit nec, finibus erat. Donec id convallis nulla, vel aliquam elit. Aenean vestibulum rutrum bibendum. Nam in quam eu lectus venenatis placerat non eu nibh.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </main>
`;