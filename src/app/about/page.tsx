
export const runtime = 'edge';

export default function AboutPage() {
  return (
    <div className="m-auto text-black space-y-2">
      <p className=" text-xl text-center opacity-70 text-balance">
        En esta página podrás subir tus <span className="text-purple-600">dibujos</span> y tener tu propia galería para
        poder compartirlos con tus amigos y el mundo.
      </p>
      <p className=" text-xl text-center opacity-70 text-balance">
        No comentarios no likes, solo tu arte.
      </p>
    </div>
  );
}
