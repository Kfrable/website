function playSound(e){
      const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
      const key = document.querySelector(`audio[data-key="${e.keyCode}"]`);

      if(!audio) return;
      audio.currentTime = 0;
      key.classList.add('playing')
      console.log(e)
    }

    function removeTransition(e){
      if(e.propertyName !== 'transform') return;
        this.classlist.remove('playing')
        console.log(e)
    }

    const keys = document.querySelectorAll('.key');
    keys.forEach(key => key.addEventListener('transitioned',removeTransition));
    window.addEventListener('keydown',playSound);