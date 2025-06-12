import { post } from '../../types/post';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

interface PostListProps {
  posts: post[];
}

export default function PostList({ posts }: PostListProps) {
  return (
    <div className='space-y-4'>
      {posts.map((product) => (
        <Card key={product.id}>
          <CardHeader>
            <CardTitle>{`${product.name} (post ${product.id})`}</CardTitle>
          </CardHeader>
          <CardContent>{product.description}</CardContent>
        </Card>
      ))}
    </div>
  );
}