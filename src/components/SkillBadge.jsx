function SkillBadge({ skill, type = 'default' }) {
  const styles = {
    default: 'bg-purple-100 text-purple-700',
    missing: 'bg-red-100 text-red-700',
    strength: 'bg-green-100 text-green-700',
  };

  return (
    <span className={`px-4 py-2 rounded-full text-sm font-semibold ${styles[type]}`}>
      {skill}
    </span>
  );
}

export default SkillBadge;
