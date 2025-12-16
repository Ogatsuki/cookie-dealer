'use client';

import { useSearchParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

import Explains from "./(components)/explains";
import MoreInfo from "./(components)/moreinfo";
import Preview from "./(components)/preview";
import Options from "./(components)/options";
import Buttons from "./(components)/buttons";

export default function Home() {
  const step = 0;
  const level = 0;
  const searchParams = useSearchParams();
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);
  const [ isSignOutSuccess, setIsSignOutSuccess ] = useState(false);

  useEffect(() => {
    if (searchParams.get('signup')==='success') {
      setShowModal(true);
      router.replace('/');
    }

    if (searchParams.get('signout')==='success') {
      setIsSignOutSuccess(true);
      router.replace('/');
    }

  }, [searchParams, router])

  return (
    <div className="p-4 flex justify-center flex-1">
      <div className="w-full max-w-4xl flex flex-col">
        {showModal && (<p className='text-emerald-600'>新規登録が完了しました</p>)}
        {isSignOutSuccess && (<p className='text-emerald-600'>ログアウトが完了しました。</p>)}
        <Explains step={step} level={level} />
        <MoreInfo step={step} level={level} />
        <Preview step={step} level={level} />
        <Options step={step} level={level} />
        <Buttons step={step} level={level} />
      </div>
    </div>
  );
}
