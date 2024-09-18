import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';

export function Contacto({ contactoRef }: any) {
  return (
    <section id="contacto" ref={contactoRef} className="ct py-16 bg-gradient-to-r from-yellow-100 to-pink-100 animate-fadeIn">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12 text-yellow-800">Contacto</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-yellow-600">Información de Contacto</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 text-gray-700">
                  <div className="flex items-center space-x-2">
                    <Phone className="h-5 w-5 text-yellow-600" />
                    <span>+123 45q1236 7890</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Mail className="h-5 w-5 text-yellow-600" />
                    <span>atb_company@gmail.com</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-5 w-5 text-yellow-600" />
                    <span>El Bagre</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="h-5 w-5 text-yellow-600" />
                    <span>Lun - Vie, 9 AM - 6 PM</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="text-yellow-600">Envíanos un Mensaje</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div>
                    <Label htmlFor="name" className="text-gray-800">Nombre</Label>
                    <Input id="name" placeholder="Tu nombre" />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-gray-800">Correo Electrónico</Label>
                    <Input id="email" type="email" placeholder="Tu correo electrónico" />
                  </div>
                  <div>
                    <Label htmlFor="message" className="text-gray-800">Mensaje</Label>
                    <Textarea id="message" placeholder="Escribe tu mensaje aquí..." />
                  </div>
                  <Button type="submit" className="w-full bg-yellow-600 text-white hover:bg-yellow-500">
                    Enviar
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
