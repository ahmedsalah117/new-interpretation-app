export const scrollToTargetById = (id: string) => {
  const element = document.getElementById(id);
  const headerOffset = 76;
  const elementPosition = element?.getBoundingClientRect().top as number;
  const offsetPosition = elementPosition + window.scrollY - headerOffset;

  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth',
  });
};
