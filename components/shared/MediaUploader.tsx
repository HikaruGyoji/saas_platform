'use client';

import { useToast } from '@/components/ui/use-toast';
import { useLang } from '@/hooks/lang/useLang';
import { dataUrl, getImageSize } from '@/lib/utils';
import { CldImage, CldUploadWidget } from 'next-cloudinary';
import { PlaceholderValue } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';
import OriginalLangH3 from '../pages/OriginalLangH3';

type MediaUploaderProps = {
  onValueChange: (value: string) => void;
  setImage: React.Dispatch<any>;
  publicId: string;
  image: any;
  type: string;
};

const MediaUploader = ({
  onValueChange,
  setImage,
  image,
  publicId,
  type,
}: MediaUploaderProps) => {
  const { toast } = useToast();

  const onUploadSuccessHandler = (result: any) => {
    setImage((prevState: any) => ({
      ...prevState,
      publicId: result?.info?.public_id,
      width: result?.info?.width,
      height: result?.info?.height,
      secureURL: result?.info?.secure_url,
    }));

    onValueChange(result?.info?.public_id);

    toast({
      title: 'Image uploaded successfully',
      description: '1 credit was deducted from your account',
      duration: 5000,
      className: 'success-toast',
    });
  };

  const onUploadErrorHandler = () => {
    toast({
      title: 'Something went wrong while uploading',
      description: 'Please try again',
      duration: 5000,
      className: 'error-toast',
    });
  };

  const lang = useLang(); // `ja` or `en`

  return (
    <CldUploadWidget
      uploadPreset='jsm_imaginify'
      options={{
        multiple: false,
        resourceType: 'image',
      }}
      onSuccess={onUploadSuccessHandler}
      onError={onUploadErrorHandler}
    >
      {({ open }) => (
        <div className='flex flex-col gap-4'>
          <OriginalLangH3 />

          {publicId ? (
            <>
              <div className='cursor-pointer overflow-hidden rounded-[10px]'>
                <CldImage
                  width={getImageSize(type, image, 'width')}
                  height={getImageSize(type, image, 'height')}
                  src={publicId}
                  alt='image'
                  sizes={'(max-width: 767px) 100vw, 50vw'}
                  placeholder={dataUrl as PlaceholderValue}
                  className='media-uploader_cldImage'
                />
              </div>
            </>
          ) : (
            <div className='media-uploader_cta' onClick={() => open()}>
              <div className='media-uploader_cta-image'>
                <Image
                  src='/assets/icons/add.svg'
                  alt='Add Image'
                  width={24}
                  height={24}
                />
              </div>
              <p className='p-14-medium'>
                {lang === 'en'
                  ? 'Click here to upload image'
                  : '画像をアップロードするにはここをクリック'}
              </p>
            </div>
          )}
        </div>
      )}
    </CldUploadWidget>
  );
};

export default MediaUploader;
