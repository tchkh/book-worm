import { Search } from 'lucide-react'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { blogPosts } from '@/data/blogPosts'
import authorImage from '../assets/author-image.jpg'
import { useState } from 'react'

function BlogCard({ post }) {
  return (
    <div className='flex flex-col gap-4'>
      <a href='#' className='relative h-[212px] sm:h-[360px]'>
        <img
          className='w-full h-full object-cover rounded-md'
          src={post.image}
          alt={post.title}
        />
      </a>
      <div className='flex flex-col'>
        <div className='flex'>
          <span className='bg-green-200 rounded-full px-3 py-1 text-sm font-semibold text-green-600 mb-2'>
            {post.category}
          </span>
        </div>
        <a href='#'>
          <h2 className='font-bold text-xl mb-2 line-clamp-2 hover:underline'>
            {post.title}
          </h2>
        </a>
        <p className='text-muted-foreground text-sm mb-4 flex-grow line-clamp-3'>
          {post.description}
        </p>
        <div className='flex items-center text-sm'>
          <img
            className='w-8 h-8 rounded-full mr-2'
            src={authorImage}
            alt={post.author}
          />
          <span>{post.author}</span>
          <span className='mx-2 text-gray-300'>|</span>
          <span>{post.date}</span>
        </div>
      </div>
    </div>
  )
}

function Articles() {
  const categories = ['Highlight', 'Cat', 'Inspiration', 'General']
  const [category, setCategory] = useState('Highlight')

  return (
    <div className='w-full max-w-7xl mx-auto md:px-6 lg:px-8 mb-10'>
      <h2 className='text-xl font-bold mb-4 px-4'>Latest articles</h2>
      <div className='bg-[#EFEEEB] px-4 py-4 md:py-3 md:rounded-2xl flex flex-col space-y-4 md:gap-16 md:flex-row-reverse md:items-center md:space-y-0 md:justify-between mb-10'>
        <div className='w-full md:max-w-sm'>
          <div className='relative'>
            <Search className='absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400' />
            <Input
              type='text'
              placeholder='Search'
              className='py-3 rounded-lg placeholder:text-muted-foreground focus-visible:ring-0 focus-visible:ring-offset-0 bg-white border-[#DAD6D1]'
            />
          </div>
        </div>
        <div className='md:hidden w-full'>
          <Select value={category} onValueChange={value => setCategory(value)}>
            <SelectTrigger className='w-full py-3 rounded-lg text-muted-foreground focus:ring-0 focus:ring-offset-0 border-[#DAD6D1] bg-white'>
              <SelectValue placeholder='Select category' />
            </SelectTrigger>
            <SelectContent className='border-[#DAD6D1] bg-white'>
              {categories.map(category => {
                return (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                )
              })}
            </SelectContent>
          </Select>
        </div>
        <div className='hidden md:flex space-x-2'>
          {categories.map(tag => (
            <button
              key={tag}
              onClick={() => setCategory(tag)}
              disabled={category === tag}
              className={`px-4 py-3 transition-colors rounded-lg text-sm text-muted-foreground font-medium ${
                category === tag ? 'bg-[#DAD6D1]' : 'hover:bg-white'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Articles
