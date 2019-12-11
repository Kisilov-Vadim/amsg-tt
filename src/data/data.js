export const advantages = [
  {
    id: 1,
    img: './img/advantages/custome.png',
    title: 'Easily Customised', 
    body: 'Cras justo odio, dapibus ac facilisis in, egestas eget quam. Nullam quis risus eget urna mollis ornare vel eu leo. Donec ullamcorper nulla non metus auctor fringilla.'
  }, 
  {
    id: 2,
    img: './img/advantages/response.png', 
    title: 'Responsive Ready',
    body: 'Cras justo odio, dapibus ac facilisis in, egestas eget quam. Nullam quis risus eget urna mollis ornare vel eu leo. Donec ullamcorper nulla non metus auctor fringilla.'  
  }, 
  {
    id: 3,
    img: './img/advantages/design.png', 
    title: 'Modern Design',
    body: 'Cras justo odio, dapibus ac facilisis in, egestas eget quam. Nullam quis risus eget urna mollis ornare vel eu leo. Donec ullamcorper nulla non metus auctor fringilla.'
  }, 
  {
    id: 4,
    img: './img/advantages/clean-code.png', 
    title: 'Clean Code',
    body: 'Cras justo odio, dapibus ac facilisis in, egestas eget quam. Nullam quis risus eget urna mollis ornare vel eu leo. Donec ullamcorper nulla non metus auctor fringilla.'
  },
  {
    id: 5,
    img: './img/advantages/ship.png', 
    title: 'Ready to Ship',
    body: 'Cras justo odio, dapibus ac facilisis in, egestas eget quam. Nullam quis risus eget urna mollis ornare vel eu leo. Donec ullamcorper nulla non metus auctor fringilla.'
  },
  {
    id: 6, 
    img: './img/advantages/download.png', 
    title: 'Download for Free',
    body: 'Cras justo odio, dapibus ac facilisis in, egestas eget quam. Nullam quis risus eget urna mollis ornare vel eu leo. Donec ullamcorper nulla non metus auctor fringilla.'
  }
]; 

export const projects = [
  {
    id: 1, 
    img: './img/projects/1.jpg'
  }, 
  {
    id: 2,
    img: './img/projects/2.jpg'
  },
  {
    id: 3, 
    img: './img/projects/3.jpg'
  },
  {
    id: 4,
    img: './img/projects/4.jpg'
  },
  {
    id: 5,
    img: './img/projects/5.jpg'
  },
  {
    id: 6,
    img: './img/projects/6.jpg'
  },
  {
    id: 7,
    img: './img/projects/7.jpg'
  },
  {
    id: 8,
    img: './img/projects/8.jpg'
  }
]

export const team = [
  {
    id: 1,
    img: './img/team/woods.png',
    name: 'Ruth Woods',
    position: 'Founder, CEO',
    body: 'Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Maecenas sed diam eget risus varius blandit sit amet non magna. Nullam quis risus eget urna mollis ornare vel eu leo.'
  },
  {
    id: 2,
    img: './img/team/reed.png',
    name: 'Timothy Reed',
    position: 'Co-Founder, Developer',
    body: 'Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Maecenas sed diam eget risus varius blandit sit amet non magna. Nullam quis risus eget urna mollis ornare vel eu leo.'
  },
  {
    id: 3,
    img: './img/team/valdez.png',
    name: 'Victoria Valdez',
    position: 'UI Designer',
    body: 'Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Maecenas sed diam eget risus varius blandit sit amet non magna. Nullam quis risus eget urna mollis ornare vel eu leo.'
  },
  {
    id: 4,
    img: './img/team/little.png',
    name: 'Beverly Little',
    position: 'Data Scientist',
    body: 'Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Maecenas sed diam eget risus varius blandit sit amet non magna. Nullam quis risus eget urna mollis ornare vel eu leo.'
  }
]

export const getPhotos = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/photos');
  return response.json();
}

export const quotes = [
  {
    name: 'Bernard M. Baruch',
    quote: 'Be who you are and say what you feel, because those who mind don’t matter and those who matter don’t mind.'
  },
  {
    name: 'Susan Sims, Interaction Designer at XYZ',
    quote: 'Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Donec sed odio dui. Aenean eu leo quam...'
  },
  {
    name: 'Maya Angelou',
    quote: 'I’ve learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.',
  }, 
  {
    name: 'Anne Frank',
    quote: 'How wonderful it is that nobody need wait a single moment before starting to improve the world.',
  },
  {
    name: 'Martin Luther King, Jr.', 
    quote: 'Darkness cannot drive out darkness; only light can do that. Hate cannot drive out hate; only love can do that.'
  }
]