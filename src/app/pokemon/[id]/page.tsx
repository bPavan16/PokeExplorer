"use client"
import React, { useEffect, useState } from "react"
import { useParams } from "next/navigation"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { Star, Volume2, Eye, ArrowLeft } from "lucide-react"

const PokemonPage = () => {
  const { id } = useParams()
  const [pokemonData, setPokemonData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [selectedSprite, setSelectedSprite] = useState("front_default")
  const [audioPlaying, setAudioPlaying] = useState(false)

  useEffect(() => {
    const fetchPokemonData = async () => {
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        if (!response.ok) {
          throw new Error("Failed to fetch Pokémon data")
        }
        const data = await response.json()
        setPokemonData(data)
        setLoading(false)
      } catch (error) {
        console.error(error)
        setLoading(false)
      }
    }

    fetchPokemonData()
  }, [id])

  const playPokemonCry = () => {
    if (pokemonData?.cries?.latest) {
      const audio = new Audio(pokemonData.cries.latest)
      audio.play()
      setAudioPlaying(true)
      setTimeout(() => setAudioPlaying(false), 2000)
    }
  }

  const getTypeColor = (type) => {
    const colors = {
      normal: "bg-gray-400",
      fire: "bg-red-500",
      water: "bg-blue-500",
      electric: "bg-yellow-400",
      grass: "bg-green-500",
      ice: "bg-blue-200",
      fighting: "bg-red-700",
      poison: "bg-purple-500",
      ground: "bg-yellow-600",
      flying: "bg-indigo-400",
      psychic: "bg-pink-500",
      bug: "bg-green-400",
      rock: "bg-yellow-800",
      ghost: "bg-purple-700",
      dragon: "bg-indigo-700",
      dark: "bg-gray-800",
      steel: "bg-gray-500",
      fairy: "bg-pink-300",
    }
    return colors[type] || "bg-gray-400"
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-xl font-semibold text-gray-600">Loading Pokémon data...</p>
        </div>
      </div>
    )
  }

  if (!pokemonData) {
    return <div className="text-center py-10 text-red-500">Failed to load Pokémon data</div>
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <div className="container mx-auto py-8 px-4">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <Button variant="outline" size="icon" className="hover:bg-blue-100">
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Pokédex Entry
          </h1>
        </div>

        {/* Main Pokemon Card */}
        <Card className="shadow-2xl border-0 overflow-hidden mb-8 bg-white/80 backdrop-blur-sm">
          <CardHeader className="bg-gradient-to-r from-blue-500 to-purple-600 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-20 -mt-20"></div>
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
              <div className="text-center md:text-left">
                <Badge variant="secondary" className="mb-4 bg-white/20 text-white border-white/30">
                  #{String(pokemonData.id).padStart(3, '0')}
                </Badge>
                <CardTitle className="text-4xl md:text-5xl capitalize mb-2">{pokemonData.name}</CardTitle>
                <div className="flex gap-2 mb-4 justify-center md:justify-start">
                  {pokemonData.types.map((typeObj) => (
                    <Badge 
                      key={typeObj.type.name} 
                      className={`${getTypeColor(typeObj.type.name)} text-white border-0 capitalize px-4 py-1`}
                    >
                      {typeObj.type.name}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-4 text-sm">
                  <span>Height: {pokemonData.height / 10} m</span>
                  <span>Weight: {pokemonData.weight / 10} kg</span>
                  <span>Base Exp: {pokemonData.base_experience}</span>
                </div>
              </div>
              <div className="relative">
                {pokemonData.sprites?.other?.["official-artwork"]?.front_default && (
                  <div className="relative">
                    <div className="absolute inset-0 bg-white/20 rounded-full blur-2xl"></div>
                    <Image
                      src={pokemonData.sprites.other["official-artwork"].front_default}
                      alt={pokemonData.name}
                      width={250}
                      height={250}
                      className="relative z-10 drop-shadow-2xl hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}

                
                <Button
                  onClick={playPokemonCry}
                  className={`absolute bottom-4 z-19 right-4 rounded-full ${audioPlaying ? 'animate-pulse bg-green-500' : 'bg-white/20'} hover:bg-white/30 border-white/30`}
                  size="icon"
                >
                  <Volume2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardHeader>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Stats Card */}
          <Card className="shadow-lg bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl text-blue-700 flex items-center gap-2">
                <Star className="h-6 w-6" />
                Base Stats
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {pokemonData.stats.map((statObj) => (
                  <div key={statObj.stat.name}>
                    <div className="flex justify-between text-sm font-medium mb-1">
                      <span className="capitalize">{statObj.stat.name.replace('-', ' ')}</span>
                      <span className="font-bold">{statObj.base_stat}</span>
                    </div>
                    <Progress 
                      value={statObj.base_stat} 
                      max={255} 
                      className="h-3"
                    />
                    <div className="text-xs text-gray-500 mt-1">
                      EV: {statObj.effort}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Abilities & Details Card */}
          <Card className="shadow-lg bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl text-purple-700">Abilities & Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="font-semibold mb-3 text-lg">Abilities</h3>
                <div className="space-y-2">
                  {pokemonData.abilities.map((abilityObj, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <Badge variant={abilityObj.is_hidden ? "destructive" : "secondary"} className="capitalize">
                        {abilityObj.ability.name.replace('-', ' ')}
                      </Badge>
                      {abilityObj.is_hidden && <span className="text-xs text-red-500">(Hidden)</span>}
                      <span className="text-xs text-gray-500">Slot {abilityObj.slot}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Separator />

              <div>
                <h3 className="font-semibold mb-3 text-lg">Game Information</h3>
                <div className="space-y-2 text-sm">
                  <p><strong>Order:</strong> {pokemonData.order}</p>
                  <p><strong>Is Default:</strong> {pokemonData.is_default ? 'Yes' : 'No'}</p>
                  <p><strong>Species:</strong> <span className="capitalize">{pokemonData.species.name}</span></p>
                </div>
              </div>

              {pokemonData.held_items.length > 0 && (
                <>
                  <Separator />
                  <div>
                    <h3 className="font-semibold mb-3 text-lg">Held Items</h3>
                    <div className="space-y-2">
                      {pokemonData.held_items.map((itemObj, index) => (
                        <div key={index} className="p-2 bg-gray-50 rounded-lg">
                          <p className="capitalize font-medium">{itemObj.item.name.replace('-', ' ')}</p>
                          {itemObj.version_details.map((detail, idx) => (
                            <p key={idx} className="text-xs text-gray-600">
                              {detail.version.name} - Rarity: {detail.rarity}%
                            </p>
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>
                </>
              )}
            </CardContent>
          </Card>

          {/* Sprites Card */}
          <Card className="shadow-lg bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl text-green-700 flex items-center gap-2">
                <Eye className="h-6 w-6" />
                Sprites
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center mb-4">
                {pokemonData.sprites[selectedSprite] && (
                  <Image
                    src={pokemonData.sprites[selectedSprite]}
                    alt={`${pokemonData.name} ${selectedSprite}`}
                    width={150}
                    height={150}
                    className="mx-auto bg-gray-100 rounded-lg p-4"
                  />
                )}
              </div>
              <div className="grid grid-cols-2 gap-2">
                {Object.entries(pokemonData.sprites)
                  .filter(([, value]) => value && typeof value === 'string' && value.includes('pokemon'))
                  .map(([key]) => (
                    <Button
                      key={key}
                      variant={selectedSprite === key ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedSprite(key)}
                      className="text-xs capitalize"
                    >
                      {key.replace('_', ' ')}
                    </Button>
                  ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Moves Section */}
        <Card className="shadow-lg bg-white/80 backdrop-blur-sm mt-8">
          <CardHeader>
            <CardTitle className="text-2xl text-orange-700">Moves</CardTitle>
            <CardDescription>
              This Pokémon can learn {pokemonData.moves.length} different moves
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-h-96 overflow-y-auto">
              {pokemonData.moves.map((moveObj, index) => (

                moveObj.version_group_details[0].move_learn_method.name == 'level-up' &&

                <div key={index} className="p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <p className="font-medium capitalize mb-1">{moveObj.move.name.replace('-', ' ')}</p>
                  {moveObj.version_group_details[0] && (
                    
                    
                    <div className="text-xs text-gray-600 space-y-1">
                      <p>Level: {moveObj.version_group_details[0].level_learned_at || 'N/A'}</p>
                      <p className="capitalize">Method: {moveObj.version_group_details[0].move_learn_method.name.replace('-', ' ')}</p>
                    </div>

                  )}
                </div>
              ))}
            </div>
            {pokemonData.moves.length > 30 && (
              <p className="text-center text-gray-500 mt-4">
                And {pokemonData.moves.length - 30} more moves...
              </p>
            )}
          </CardContent>
        </Card>

        {/* Past Types & Abilities */}
        {(pokemonData.past_types?.length > 0 || pokemonData.past_abilities?.length > 0) && (
          <Card className="shadow-lg bg-white/80 backdrop-blur-sm mt-8">
            <CardHeader>
              <CardTitle className="text-2xl text-indigo-700">Historical Changes</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {pokemonData.past_types?.length > 0 && (
                <div>
                  <h3 className="font-semibold mb-3 text-lg">Past Types</h3>
                  {pokemonData.past_types.map((pastType, index) => (
                    <div key={index} className="p-3 bg-gray-50 rounded-lg">
                      <p className="font-medium capitalize mb-2">
                        Generation: {pastType.generation.name.replace('-', ' ')}
                      </p>
                      <div className="flex gap-2">
                        {pastType.types.map((typeObj) => (
                          <Badge 
                            key={typeObj.type.name}
                            className={`${getTypeColor(typeObj.type.name)} text-white border-0 capitalize`}
                          >
                            {typeObj.type.name}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {pokemonData.past_abilities?.length > 0 && (
                <div>
                  <h3 className="font-semibold mb-3 text-lg">Past Abilities</h3>
                  {pokemonData.past_abilities.map((pastAbility, index) => (
                    <div key={index} className="p-3 bg-gray-50 rounded-lg">
                      <p className="font-medium capitalize mb-2">
                        Generation: {pastAbility.generation.name.replace('-', ' ')}
                      </p>
                      <div className="space-y-1">
                        {pastAbility.abilities.map((abilityObj, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            {abilityObj.ability ? (
                              <Badge variant={abilityObj.is_hidden ? "destructive" : "secondary"}>
                                {abilityObj.ability.name.replace('-', ' ')}
                              </Badge>
                            ) : (
                              <Badge variant="outline">Empty Slot</Badge>
                            )}
                            <span className="text-xs text-gray-500">Slot {abilityObj.slot}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}

export default PokemonPage