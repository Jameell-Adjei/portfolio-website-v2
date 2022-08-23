import React, {useEffect, useState} from 'react';

interface Options  {
  rootMargin: string, threshold?:number 
}


export function useOnViewport(options: Options, elementClassName: string, newClass: string){
  useEffect(()=> {
    const element = <HTMLElement>document.querySelector(elementClassName);

    const observer = new IntersectionObserver(
      ([entry]) => {

        if(entry.isIntersecting){
          element.classList.add(newClass);
        } 
      },
      options
    )

    if (element) {
      observer.observe(element);
    }
    return () => {
      observer.unobserve(element);
    }; 



  }, [])
}
// Hook to check if the element is within the viewport/screen
 
export function useOnScreen(ref: React.RefObject<HTMLElement>, options: Options, elementClassName: string, newClass: string, removed: boolean) {
    // State and setter for storing whether element is visible
   
   const [isIntersecting, setIntersecting] = useState(false);
    useEffect(() => {
       const currentRef = ref.current as HTMLElement;
       const element = <HTMLElement>document.querySelector(elementClassName);

      const observer = new IntersectionObserver(
        ([entry]) => {
          // Update our state when observer callback fires
          setIntersecting(entry.isIntersecting);

        if (!entry.isIntersecting) {
          element.classList.add(newClass);

        } else if (entry.isIntersecting && element.classList.contains(newClass) && removed){
          element.classList.remove(newClass);
        }

        },
          options
      );
     
      if (currentRef) {
        observer.observe(currentRef);
      }
      return () => {
        observer.unobserve(currentRef);
      };
    }, []); 
  }