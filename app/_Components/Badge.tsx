function Badge({isSelected = false, text, className = ''}: {isSelected?: boolean; text: string; className?: string}) {
  return <div className={`${isSelected ? 'bg-black text-white' : 'bg-transparent text-black'} w-min rounded-2xl border border-black px-5 py-1 ${className}`}>{text}</div>;
}

export default Badge;
