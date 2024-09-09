import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';

const page = () => {
    const CreateNewBlog = dynamic(
        () => import('@/src/components/RichTextEditor/Editor'),
        { ssr: false }
      );
    return (
        <div>
             <CreateNewBlog />
        </div>
    );
};

export default page;