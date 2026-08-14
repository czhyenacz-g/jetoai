type AdSlotProps = {
  id: string;
};

// Vyhrazené místo pro budoucí reklamu — v V1 nic nevykresluje.
export function AdSlot({ id }: AdSlotProps) {
  return <div data-ad-slot={id} className="hidden" />;
}
