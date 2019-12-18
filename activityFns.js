export function prefix(location, ...prefixes) {
  return prefixes.some(
    prefix => location.href.indexOf(`${location.origin}/${prefix}`) !== -1
  );
}

export function anders(location) {
  return true;
}

export function navigation(location) {
  return true;
}

export function kent(location) {
  return prefix(location, "kent");
}

export function create(location) {
  return prefix(location, "createMeeting");
}
