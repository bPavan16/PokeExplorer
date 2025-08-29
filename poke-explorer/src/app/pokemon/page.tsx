"use client"
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation';
import { ChevronLeft, ChevronRight, Search } from 'lucide-react';
import Image from 'next/image';

interface PokemonListItem {
  name: string;
  url: string;
}


const Page = () => {

  const LIMIT = 50;

  const [pokemon, setPokemon] = useState<PokemonListItem[]>([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [totalCount, setTotalCount] = useState(0);
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  useEffect(() => {
    const fetchPokemon = async () => {
      setLoading(true);
      const apiUrl = process.env.NEXT_PUBLIC_POKEAPI_URL || "https://pokeapi.co/api/v2/";

      try {
        const response = await fetch(`${apiUrl}pokemon/?limit=${LIMIT}&offset=${(pageNumber - 1) * LIMIT}`);
        if (!response.ok) {
          throw new Error("Failed to fetch Pokémon data");
        }
        const data = await response.json();
        console.log(data.results);
        setPokemon(data.results);
        setTotalCount(data.count);
      } catch (error) {
        console.error("Error fetching Pokemon:", error);
        setPokemon([]);
        setTotalCount(0);
      } finally {
        setLoading(false);
      }
    };

    fetchPokemon();
  }, [pageNumber]);

  const getPokemonId = (url: string) => {
    const urlParts = url.split('/');
    return urlParts[urlParts.length - 2];
  };

  const getPokemonImageUrl = (id: string) => {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
  };

  const filteredPokemon = pokemon.filter((poke: PokemonListItem) =>
    poke.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(totalCount / LIMIT);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <div className="container mx-auto py-8 px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
            Pokédex
          </h1>
          <p className="text-gray-600 text-xl max-w-2xl mx-auto">
            Discover and explore the wonderful world of Pokémon. Search through {totalCount} creatures and learn about their unique abilities.
          </p>
        </div>

        {/* Search, Filters, and Pagination Combined */}
        <Card className=" shadow-xl gap-1 py-3 mb-5 bg-white/90 backdrop-blur-sm border-0 ring-1 ring-gray-200">
          <CardContent className="p-6 py-1">
            {/* Top Row - Search and Quick Stats */}
            <div className="flex flex-col lg:flex-row gap-4 items-center mb-2">
              <div className="relative flex-1 max-w-full">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input
                  type="text"
                  placeholder="Search Pokémon by name..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 w-full bg-white border-blue-200 focus:border-blue-500 h-12 text-lg min-w-[400px] max-w-full"
                />
              </div>
            </div>
            <div className="flex gap-3">
              <Badge variant="outline" className="text-sm py-2 px-4">
                Total: {totalCount} Pokémon
              </Badge>
              <Badge variant="secondary" className="text-sm py-2 px-4">
                Page {pageNumber} of {totalPages}
              </Badge>
              {searchTerm && (
                <Badge variant="default" className="text-sm py-2 px-4 bg-blue-500">
                  Found: {filteredPokemon.length} results
                </Badge>
              )}
            </div>

            {/* Bottom Row - Pagination Controls */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-gray-100">
              <div className="flex items-center gap-3">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setPageNumber(1)}
                  disabled={pageNumber === 1}
                  className="hover:bg-blue-50"
                >
                  First
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setPageNumber(Math.max(1, pageNumber - 1))}
                  disabled={pageNumber === 1}
                  className="hover:bg-blue-50"
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>

                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-600 whitespace-nowrap">Go to page:</span>
                  <Input
                    type="number"
                    value={pageNumber}
                    onChange={(e) => {
                      const value = Number(e.target.value);
                      if (value >= 1 && value <= totalPages) {
                        setPageNumber(value);
                      }
                    }}
                    className="w-20 text-center h-9"
                    min="1"
                    max={totalPages}
                  />
                  <span className="text-sm text-gray-600">of {totalPages}</span>
                </div>

                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setPageNumber(Math.min(totalPages, pageNumber + 1))}
                  disabled={pageNumber === totalPages}
                  className="hover:bg-blue-50"
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setPageNumber(totalPages)}
                  disabled={pageNumber === totalPages}
                  className="hover:bg-blue-50"
                >
                  Last
                </Button>
              </div>

              <div className="text-sm text-gray-600 bg-gray-50 px-3 py-2 rounded-lg">
                Showing {((pageNumber - 1) * LIMIT) + 1} - {Math.min(pageNumber * LIMIT, totalCount)} of {totalCount} Pokémon
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Loading State */}
        {loading && (
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <p className="text-gray-600">Loading Pokémon...</p>
          </div>
        )}

        {/* Pokemon Grid */}
        {!loading && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 mb-8">
            {filteredPokemon.map((poke: PokemonListItem) => {
              const pokemonId = getPokemonId(poke.url);
              return (
                <Card
                  key={poke.name}
                  className="group hover:shadow-xl transition-all duration-300 cursor-pointer bg-white/90 backdrop-blur-sm border-2 hover:border-blue-300 transform hover:-translate-y-2"
                  onClick={() => router.push(`/pokemon/${pokemonId}`)}
                >
                  <CardHeader className="pb-2">
                    <div className="w-full h-40 bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg flex items-center justify-center mb-3 overflow-hidden">
                      <Image
                        src={getPokemonImageUrl(pokemonId)}
                        alt={poke.name}
                        width={128}
                        height={128}
                        className="object-contain transition-transform duration-300 group-hover:scale-110"
                        onError={(e) => {
                          e.currentTarget.onerror = null;
                          e.currentTarget.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`;
                        }}
                      />
                    </div>
                    <Badge variant="secondary" className="w-fit mx-auto">
                      #{pokemonId.padStart(3, '0')}
                    </Badge>
                  </CardHeader>
                  <CardContent className="pt-0 text-center">
                    <CardTitle className="text-lg capitalize text-gray-800 group-hover:text-blue-600 transition-colors">
                      {poke.name}
                    </CardTitle>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        )}

        {/* No Results */}
        {!loading && filteredPokemon.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No Pokémon found matching your search.</p>
          </div>
        )}

        {/* Pagination */}
        <Card className="shadow-lg py-2 bg-white/80 backdrop-blur-sm">
          <CardContent className="p-6 py-1">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setPageNumber(Math.max(1, pageNumber - 1))}
                  disabled={pageNumber === 1}
                  className="hover:bg-blue-50"
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>

                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-600">Page</span>
                  <Input
                    type="number"
                    value={pageNumber}
                    onChange={(e) => {
                      const value = Number(e.target.value);
                      if (value >= 1 && value <= totalPages) {
                        setPageNumber(value);
                      }
                    }}
                    className="w-20 text-center"
                    min="1"
                    max={totalPages}
                  />
                  <span className="text-sm text-gray-600">of {totalPages}</span>
                </div>

                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setPageNumber(Math.min(totalPages, pageNumber + 1))}
                  disabled={pageNumber === totalPages}
                  className="hover:bg-blue-50"
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>

              <div className="text-sm text-gray-600">
                Showing {((pageNumber - 1) * LIMIT) + 1} - {Math.min(pageNumber * LIMIT, totalCount)} of {totalCount} Pokémon
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default Page

